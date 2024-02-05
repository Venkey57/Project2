import React ,{memo}from 'react'

const  Home =()=> {
    console.log('header component')
  return (
    <div style={{ background: "blue", fontSize: "30px" }}>Header component for call backs </div>
  )
}

export default memo(Home)