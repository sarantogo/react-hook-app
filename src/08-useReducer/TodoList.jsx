import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todosList, onDeleteTodoList, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todosList.map((item) => (
        <TodoItem
          key={item.id}
          todoItem={item}
          onDeleteTodo={onDeleteTodoList}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todosList: PropTypes.array.isRequired,
  onDeleteTodoList: PropTypes.func.isRequired,
};
