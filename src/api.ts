import { TodoListType } from "@/types";

export const getAllToDos = async (): Promise<TodoListType[]> => {
  const response = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store",
  });
  const todos = response.json();
  return todos;
};
