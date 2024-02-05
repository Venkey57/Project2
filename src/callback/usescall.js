import React, { useState, useCallback } from "react";
import Home from "./Home";
import InfoComponent from "./infoComponent";
import InfoButton from "./buttonCompo";

function Usescall() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  // const increment1 = () => {
  //   setCounter1(counter1 + 1);
  // };
  // const increment2 = () => {
  //   setCounter2(counter2 + 1);
  // };

   const increment3 = useCallback(function (){
      setCounter1(counter1+1)
    },[counter1])

  const increment4 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  return (
    <div className="text-center">
      <Home ></Home>
      <InfoComponent title="counter1" value={counter1}></InfoComponent>
      <InfoButton title="counter1" increse={increment3}></InfoButton>

      <InfoComponent title="counter2" value={counter2}></InfoComponent>
      <InfoButton title="counter2" increse={increment4}></InfoButton>
    </div>
  );
}

export default Usescall;
