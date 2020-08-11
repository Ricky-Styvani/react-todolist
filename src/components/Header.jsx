import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
      <h1 className="header-title">To Do-List</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.IsRequired,
  showAdd: PropTypes.bool.IsRequired,
  clearTodos: PropTypes.func.IsRequired
};

export default Header;
