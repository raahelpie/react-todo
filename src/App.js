import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { AllTodos } from "./components/AllTodos";

function App() {
  return (
    <AllTodos>
      <Nav />
      <NewTodo />
      <TodoList />
    </AllTodos>
  );
}

export default App;
