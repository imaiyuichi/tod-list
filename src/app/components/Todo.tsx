import React from "react";
import { TodoProps } from "@/types";

export const Todo = ({ data }: TodoProps) => {
  return (
    <li
      key={data.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded text-black shadow-md"
    >
      <span>{data.text}</span>
      <div>
        <button className="text-green-500 mr-3">edit</button>
        <button className="text-red-500 ">Delete</button>
      </div>
    </li>
  );
};
