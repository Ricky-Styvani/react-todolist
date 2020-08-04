import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completeTodo, index }) => {
  return (
    <div className="todo">
      <span className="todo-text">{text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.IsRequired,
  completeTodo: PropTypes.func.IsRequired,
  index: PropTypes.number.IsRequired
};

export default Todo;
