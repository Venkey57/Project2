import React from "react";
import "./ExcelEdit/"
// import Usescall from "./callback/usescall";
// import UseInsertiuonEffectsHooks from "./UseInsertion/UseInsertiuonEffectsHooks";
// import Sample from "./timeCheck/Sample";
import Sample from "./Debug/Sample"
import ExcelEditor from "./ExcelEdit/ExcelEditor";
// import Sample from './AutoBatching/Sample';
// import UseTransitionHooks from "./transitionDeffered/useTransitionHooks"
// import StartTrans from "./AutoBatching/StartTrans";
// import StartTransClass from "./AutoBatching/StartTransClass";

function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <ExcelEditor />
        {/* <Sample /> */}
        {/* <StartTrans /> */}
        {/* <StartTransClass/> */}
        {/* <UseTransitionHooks/> */}
      </div>
      
    </>
  );
}

export default App;
