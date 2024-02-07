import { TodoItemType } from "@/types";

export const getAllToDos = async (): Promise<TodoItemType[]> => {
  const response = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store",
  });
  const todos = response.json();
  return todos;
};

export const createTodo = async (todo: TodoItemType): Promise<TodoItemType> => {
  const response = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newToDo = response.json();
  return newToDo;
};
