import React from "react";
import { ToDoFormProps } from "@/types";

export const TodoList = ({ todos }: ToDoFormProps) => {
  return (
    <ul className="space-y-3 mt-10">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded text-black shadow-md"
        >
          <span>{todo.text}</span>
          <div>
            <button className="text-green-500 mr-3">edit</button>
            <button className="text-red-500 ">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
