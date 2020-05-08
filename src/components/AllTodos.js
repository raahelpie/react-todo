import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export const AllTodos = (props) => {
  const [todos, setTodos] = useState([
    {
      task: "Create To-do app",
      id: 1,
      completed: false,
    },
    {
      task: "Be Human",
      id: 2,
      completed: false,
    },
  ]);

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodosContext.Provider>
  );
};
