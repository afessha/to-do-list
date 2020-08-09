import React, { useState } from "react";
import "../App.css";
function ToDO() {
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const handleChange = (event) => {
    setToDoInput(event.target.value);
  };
  const handleSubmit = () => {
    setToDoList(...toDoList, toDoInput);
    console.log(toDoList);
    setToDoInput("");
  };

  return (
    <div className="todo-container">
      <input
        type="text"
        placeolder="please enter to do item"
        value={toDoInput}
        onChange={handleChange}
      />
      <button type="button" className="add" onSubmit={handleSubmit}>
        Add
      </button>
      <div className="todo-list">
        <ul>
          {toDoList.map((listItem) => {
            return <li> {listItem} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ToDO;
