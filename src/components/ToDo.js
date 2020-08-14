import React, { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
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
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        handleSubmit();
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
        onKeyPress={handleKeyPress}
      />
      <button type="button" className="add" onClick={handleSubmit}>
        ADD
      </button>
      <div className="todo-list">
        {props.toDoList.length !== 0 ? (
          <List>
            {props.toDoList.map((todo, index) => (
              <ListItem key={index.toString()} dense button>
                <Checkbox tabIndex={-1} disableRipple />
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => {
                      props.deleteToDo(todo);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : null}
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
    deleteToDo: (toDo) => dispatch(toDoDelete(toDo)),
    clearAll: () => dispatch(toDeleteAll()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDO);
