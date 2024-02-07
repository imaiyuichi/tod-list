import React from "react";
import { ToDoFormProps } from "@/types";
import { Todo } from "@/app/components/Todo";

export const TodoList = ({ todos }: ToDoFormProps) => {
  return (
    <ul className="space-y-3 mt-10">
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Todo data={todo} />
        </React.Fragment>
      ))}
    </ul>
  );
};
