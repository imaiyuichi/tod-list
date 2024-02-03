import React from "react";

export const AddTask = () => {
  return (
    <form className="space-y3">
      <input
        type="text"
        className="w-full text-black border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Add a task"
      />
      <button className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  );
};
