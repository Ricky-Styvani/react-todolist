import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">To Do-List</h1>
      <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.IsRequired,
  showAdd: PropTypes.bool.IsRequired,
  clearTodos: PropTypes.func.IsRequired
};

export default Header;
