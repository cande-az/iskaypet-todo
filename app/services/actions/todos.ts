import { ITodo } from "../interfaces/ITodo";

export const getTodos = async (): Promise<ITodo[]> => {
  try {
    const response = await fetch(`${process.env.DUMMY_API}/todos?_limit=3`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};
