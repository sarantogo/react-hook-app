import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
describe("<TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Demo 1",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("should show Todos", () => {
    render(
      <TodoItem
        todoItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    expect(screen.getByText("Demo 1").className).not.toContain(
      "text-decoration-line-through"
    );
  });

  test("should show todo toggled", () => {
    todo.done = true;
    render(
      <TodoItem
        todoItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    expect(screen.getByText("Demo 1").className).toContain(
      "text-decoration-line-through"
    );
  });
  test("should call onToggleTodo function when button is clicked", () => {
    render(
      <TodoItem
        todoItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    fireEvent.click(screen.getByText("Demo 1"));
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo);
  });

  test("should call onDeleteTodo function when button Borrar is clicked", () => {
    render(
      <TodoItem
        todoItem={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: "Borrar" }));
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo);
  });
});
