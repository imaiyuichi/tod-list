"use client";
import { createTodo } from "@/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await createTodo({ id: uuidv4(), text: taskTitle });
    setTaskTitle("");
  };

  return (
    <form className="space-y3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full text-black border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Add a task"
        value={taskTitle}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
      />
      <button className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  );
};
