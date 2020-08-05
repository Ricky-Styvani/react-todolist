import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span
        className="todo-text"
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.IsRequired,
  completeTodo: PropTypes.func.IsRequired,
  index: PropTypes.number.IsRequired,
  isCompleted: PropTypes.bool.IsRequired
};

export default Todo;
