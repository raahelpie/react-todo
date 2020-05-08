import React, { useState, useContext } from "react";
import { TodosContext } from "./AllTodos";

const NewTodo = () => {
  const [todos, setTodos] = useContext(TodosContext);

  const [todo, setTodo] = useState("");

  const updateTodo = (e) => {
    setTodo(e.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        task: todo,
        id: prevTodos.length + 1,
        completed: false,
      },
    ]);
    setTodo("");
  };

  return (
    <div className="newTodo">
      <form>
        <input
          className="newForm"
          type="text"
          name="todo"
          value={todo}
          onChange={updateTodo}
          placeholder="What needs to be done?"
        />
        <button className="btn" type="submit" onClick={addToList}>
          Add Todo!
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
