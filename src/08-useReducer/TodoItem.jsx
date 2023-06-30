import PropTypes from "prop-types";

export const TodoItem = ({ todoItem, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todoItem.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todoItem)}
      >
        {todoItem.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todoItem)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
