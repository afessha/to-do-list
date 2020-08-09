import React, { useState } from "react";
function ToDO() {
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const handleChange = (event) => {
    setToDoInput(event.target.value);
  };
  const submit = () => {
    setToDoList(...toDoList, toDoInput);
    console.log(toDoList);
    setToDoInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeolder="please enter to do item"
        value={toDoInput}
        onChange={handleChange}
      />
      <button type="button" onSubmit={submit}>
        Add
      </button>
      <p> My To do list is ....</p>
      <ul>
        {toDoList.map((listItem) => {
          return <li> {listItem} </li>;
        })}
      </ul>
    </div>
  );
}

export default ToDO;
