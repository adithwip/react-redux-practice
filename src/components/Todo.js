import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClck={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClck: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
