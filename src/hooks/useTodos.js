import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatch({
      type: "[TODO] Add Todo",
      payload: newTodo,
    });
  };

  const handleDeleteTodo = (deleteTodo) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: deleteTodo,
    });
  };

  const handleToggleTodo = (toggleTodo) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: toggleTodo,
    });
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
