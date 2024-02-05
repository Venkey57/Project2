import React from "react";

function Program3(props) {
  return (
    <div style={{ color: "blue" }}>
      <h2>to change state value in parent component </h2>
      <button onClick={props.changeCount}>changeCount </button>
      <button onClick={props.changeName}>changeName </button>
    </div>
  );
}

export default Program3;
