import React, { useContext } from "react";
import { TodosContext } from "./AllTodos";

const Todo = ({ task, id, completed }) => {
  const [todos, setTodos] = useContext(TodosContext);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            task: todo.task,
            id: todo.id,
            completed: !todo.completed,
          };
        } else {
          return {
            task: todo.task,
            id: todo.id,
            completed: todo.completed,
          };
        }
      })
    );
  };

  return (
    <div>
      <p className="todo">
        <input
          type="checkbox"
          className="checkbox-round"
          onChange={toggleStatus.bind(this, id)}
        />
        <span className={completed ? "yeet" : ""}>{task}</span>
        <button className="cross" onClick={deleteTodo.bind(this, id)}>
          X
        </button>
      </p>
    </div>
  );
};

export default Todo;
