"use client";
import React, { useState } from "react";

export default function Form({ submit }) {
  const [todo, setTodo] = useState("");
  //   console.log("hi from client");
  return (
    <div>
      <form>
        <label htmlFor="todo">todo:</label>
        <input
          name="todo"
          type="text"
          id="todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            await submit(todo);
          }}>
          send mail
        </button>
      </form>
      <h1>{todo}</h1>
    </div>
  );
}
