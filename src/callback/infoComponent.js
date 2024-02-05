import React,{memo} from 'react'

function infoComponent(props) {

    console.log(`here render info component ${props.title}`)
  return (
    <div>
        <h3>{props.title} </h3>
        <h3> value :{props.value}</h3>
         </div>
    
  )
}

export default memo(infoComponent)