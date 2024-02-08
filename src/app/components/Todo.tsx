"use client";
import React, { use, useEffect, useRef } from "react";
import { useState } from "react";
import { TodoProps } from "@/types";
import { editTodo, deleteTodo } from "@/api";

export const Todo = ({ data }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState<string>(data.text);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(data.id, editedTaskTitle);
    setIsEditing(false);
  };

  const handleDeleted = async () => {
    await deleteTodo(data.id);
  };

  return (
    <li
      key={data.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded text-black shadow-md"
    >
      {isEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTaskTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTitle(e.target.value)
          }
        />
      ) : (
        <span>{data.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            edit
          </button>
        )}

        <button className="text-red-500" onClick={handleDeleted}>
          Delete
        </button>
      </div>
    </li>
  );
};
