import React, { useEffect, useState } from 'react'

function TableComp() {

  const [load,setLoad]=useState(true)
  const [data,setData]=useState([])
  const [total, setTotal]=useState("")
    useEffect(() => {
    getdata()
    }, [])
    const getdata = () => { 
        fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).
            then((data) => {
                setLoad(false)
                setData(data)
                setTotal(data.length)
            })
    }
  return (
      <div>
          <table  >  
              <thead>
                  <tr>
                      <td>id</td>
                      <td>Name</td>
                      <td>userName</td>
                      <td>email</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                  </tr>
              </tbody>
          </table>
    </div>
  )
}

export default TableComp