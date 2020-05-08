import React, { useContext } from "react";
import { TodosContext } from "./AllTodos";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useContext(TodosContext);

  return (
    <div className="todolist">
      {todos.map((todo) => (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
