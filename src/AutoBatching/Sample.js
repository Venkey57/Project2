import React, {  useEffect, useState } from 'react'


function Sample() {
    const [state, setState] = useState("")
    console.log("Rendering")
    const [load,setLoad]=useState(true)
    const [data,setData]=useState([])
    const [total, setTotal]=useState("")
   
      const getdata = () => { 
          fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).
              then((data) => {
                  setLoad(false)
                  setData(data)
                  setTotal(data.length)
              })
      }
 
    const handleClick = () => {
        // setState(Math.random())
        // setTotal(Math.random())
        setTimeout(() => {
            setState(Math.random())
            setState(Math.random())
            setState(Math.random())
            setState(Math.random())
            setState(Math.random())
        })
        // getdata()
    }
  return (
      <div>
          <h1>React Version {React.version}</h1>
          <button onClick={handleClick}>Click btn</button>
       
    </div>
  )
}

export default Sample