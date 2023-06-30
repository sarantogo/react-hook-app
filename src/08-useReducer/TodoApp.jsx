import { TodoList } from "./TodoList";
import { AddTodo } from "./AddTodo";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todosList={todos}
            onDeleteTodoList={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
