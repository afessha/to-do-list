import React, { useState } from "react";
function ToDO() {
  const [toDoInput, setToDoInput] = useState("");
  function handleChange(event) {
    setToDoInput(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        placeolder="please enter to do item"
        value={toDoInput}
        onChange={handleChange}
      />
      <p> My To do list is ....</p>
      <ul>
        <li>{toDoInput} </li>
        <li> </li>
      </ul>
    </div>
  );
}

export default ToDO;
