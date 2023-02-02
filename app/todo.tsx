"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Learning NextJS", isDone: false },
    { todoText: "Building Chakra Pricing UI", isDone: true },
  ]);

  const onClickHandler = (addNewTodo: {
    todoText: string;
    isDone: boolean;
  }) => {
    const newTodos = todos.map((todo) => {
      if (todo.todoText == addNewTodo.todoText) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    // @ts-ignore
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (todoTobeDelete: { todoText: string }) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == todoTobeDelete.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <input
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.isDone ? "white" : "black",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.isDone}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
