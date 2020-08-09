import React, { useState } from "react";
import "../App.css";
function ToDO() {
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const handleChange = (event) => {
    setToDoInput(event.target.value);
  };
  const handleSubmit = () => {
    if (toDoInput !== "") {
      setToDoList(toDoList.concat(toDoInput));
      setToDoInput("");
    }
  };

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        type="text"
        placeholder="  New To-do"
        value={toDoInput}
        onChange={handleChange}
      />
      <button type="button" className="add" onClick={handleSubmit}>
        ADD
      </button>
      <div className="todo-list">
        <ul>
          {toDoList.map((listItem, index) => {
            return <li key={index}> {listItem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDO;
