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

export const editTodo = async (
  id: string,
  newText: string
): Promise<TodoItemType> => {
  const response = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedToDo = response.json();
  return updatedToDo;
};

export const deleteTodo = async (id: string): Promise<TodoItemType> => {
  const response = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = response.json();
  return deleteTodo;
};
