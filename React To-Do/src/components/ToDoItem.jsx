import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setDone] = useState(false);

  function handleClick() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
        <button
          id="del"
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          X
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
