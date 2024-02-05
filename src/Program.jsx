import React, { useState } from "react";

let Program = ({ team, company }) => {
  let [state, setstate] = useState("React");
  let changeName = () => {
    setstate("Angular");
  };
  return (
    <>
      <div style={{ color: "blue" }}>
        <h3>
          This userInter is developed by {team} team from {company} company
        </h3>
        <p>{state}</p>
        <button onClick={changeName}>change Name</button>;
      </div>
    </>
  );
};

export default Program;
