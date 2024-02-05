// let input = "   Subscribe   ";
// let output = "<div>" + input + "</div>";

// console.log(output);

// let trim = (str) => str.trim();

// let toLowerCase = (str) => str.toLowerCase();

// let WrappedOutput = (str) => `<div>${str}</div>`;

// let output2 = WrappedOutput(toLowerCase(trim(input)));

// console.log(output2);

// //  let know about currying concept

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// let x = add(4);

// console.log(x(3));
// console.log(add(4)(3));

// // now the example in Arrow function

// let Arrowfn = (a) => (b) => a + b;

// console.log(Arrowfn(5)(6));

//  learning to debugging



import React from 'react'

function Sample() {


    
function learningDebug() {
  console.log("learning Debug");
  return frist();
}

function frist() {
  console.log("frist function");
  // second();
  return second()
}

function second() {
  console.log("second function");
  return 10;
}

let call = learningDebug();

console.log(call);


  return (
    <div>Sample</div>
  )
}

export default Sample