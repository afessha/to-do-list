import React, { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import { toDoAdd, toDoDelete, toDeleteAll } from "../redux/actions";
function ToDO(props) {
  const [toDoInput, setToDoInput] = useState("");
  const handleChange = (event) => {
    setToDoInput(event.target.value);
  };
  const handleSubmit = () => {
    if (toDoInput.trim() !== "") {
      props.addToDo(toDoInput);
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
          {props.toDoList.map((listItem, index) => {
            return <li key={index}> {listItem} </li>;
          })}
        </ul>
        {props.toDoList.length !== 0 ? (
          <button
            className="clear"
            onClick={() => {
              props.clearAll();
            }}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (toDo) => dispatch(toDoAdd(toDo)),
    deleteToDo: (toDoId) => dispatch(toDoDelete(toDoId)),
    clearAll: () => dispatch(toDeleteAll()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDO);
