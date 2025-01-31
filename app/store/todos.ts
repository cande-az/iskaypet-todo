import { create, useStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ITodo } from "../services/interfaces/ITodo";

interface Actions {
  saveTodos: (a: ITodo[]) => void;
}

export interface TodosStore extends Actions {
  todos: ITodo[];
}

export const useTodoStoreBase = create<TodosStore>()(
  persist(
    (set) => {
      return {
        todos: [],
        saveTodos: (todos: ITodo[]) => {
          return set({ todos });
        },
      };
    },
    {
      name: "todos",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useTodoStore = () => useStore(useTodoStoreBase, (state:TodosStore) => state);
