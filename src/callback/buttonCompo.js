import React,{memo} from 'react'


function buttonCompo({title,increse}) {
    console.log(`button component render ${title}`)
  return (
    <div>
        <button onClick={increse} >{title}</button>
    </div>
  )
}

export default memo(buttonCompo)