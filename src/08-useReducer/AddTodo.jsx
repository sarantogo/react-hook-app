import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const AddTodo = ({ onNewTodo }) => {
  const { description, onInputChange, onReset } = useForm({
    description: "",
  });

  const sendNewTodo = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewTodo(newTodo);
    onReset();
  };

  return (
    <form onSubmit={sendNewTodo}>
      <input
        name="description"
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        value={description}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};
