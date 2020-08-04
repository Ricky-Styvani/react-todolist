import React from "react";

import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar Html"
    },
    {
      text: "Belajar Props dengan react"
    },
    {
      text: "Belajar svkvnsnvnvls"
    },
    {
      text: "Belajar bjsbvskbvkvn"
    },
    {
      text: "Belajar bsjbjb"
    },
    {
      text: "Belajar bvvv"
    },
    {
      text: "Belajar uhvjj"
    }
  ];
  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
