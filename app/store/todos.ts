import { create, useStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ITodo } from "../services/interfaces/ITodo";

interface Actions {
  saveTodos: (a: ITodo[]) => void;
  saveNewTodo: (a: ITodo) => void;
  deleteTodo: (a: string) => void;
  paginatedTodos: (
    a: ITodo[],
    b?: number
  ) => { currentPageTodos: ITodo[]; page: number };
  pageChange: (a: number) => void;
}

export interface TodosStore extends Actions {
  todos: ITodo[];
  allTodos: ITodo[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages?: number;
  };
}

export const useTodoStoreBase = create<TodosStore>()(
  persist(
    (set, get) => {
      return {
        todos: [],
        allTodos: [],
        firstLoad: true,
        pagination: {
          total: 0,
          page: 1,
          limit: 3,
          totalPages: 0,
        },
        saveTodos: (todos: ITodo[]) => {
          if (get()?.allTodos?.length > 0) {
            return;
          }
          const pagination = get().paginatedTodos(todos);
          return set({
            todos: pagination.currentPageTodos,
            allTodos: todos,
            pagination: {
              ...get().pagination,
              total: todos.length,
              totalPages: Math.ceil(todos.length / get().pagination.limit),
              page: pagination.page,
            },
          });
        },
        saveNewTodo: (todo: ITodo) => {
          const newTodos = [...get().allTodos, todo];
          const pagination = get().paginatedTodos(newTodos);
          set({
            allTodos: newTodos,
            todos: pagination.currentPageTodos,
            pagination: {
              ...get().pagination,
              total: newTodos.length,
              totalPages: Math.ceil(newTodos.length / get().pagination.limit),
              page: pagination.page,
            },
          });
        },
        deleteTodo: (id: string) => {
          const newTodos = get().allTodos.filter((todo) => todo.id !== id);
          const pagination = get().paginatedTodos(newTodos);
          return set({
            todos: pagination.currentPageTodos,
            allTodos: newTodos,
            pagination: {
              ...get().pagination,
              total: newTodos.length,
              totalPages: Math.ceil(newTodos.length / get().pagination.limit),
              page: pagination.page,
            },
          });
        },
        paginatedTodos: (allTodos: ITodo[], page = 1) => {
          const { pagination } = get();
          const start = (page - 1) * pagination?.limit;
          const end = start + pagination?.limit;
          const currentPageTodos = allTodos.slice(start, end);

          return { currentPageTodos, page };
        },
        pageChange: (page: number) => {
          const { allTodos } = get();
          const pagination = get().paginatedTodos(allTodos, page);
          return set({
            todos: pagination.currentPageTodos,
            pagination: {
              ...get().pagination,
              page: pagination.page,
            },
          });
        },
      };
    },
    {
      name: "todos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useTodoStore = () =>
  useStore(useTodoStoreBase, (state: TodosStore) => state);
