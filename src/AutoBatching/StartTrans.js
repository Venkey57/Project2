import React,{startTransition, useState} from 'react'

function StartTrans() {
    const [state, setstate] = useState("")
    const [list, setList] = useState([])
    const handleChange = (e) => {
        setstate(e.target.value)
        startTransition(() => {
            const data = [];
            const LIST_SIZE = 5000;
            for (let i = 0; i < LIST_SIZE; i++) {
                data.push(e.target.value)
            }
            setList(data)
            })
    }
  return (
      <div>
          <h1>Start transition</h1>
          <input type='text' value={state} onChange={handleChange}></input>
          <h5>{state}</h5>
          <p>{
              list?.map((item, index) => {
                    return (
                        <div className='parent-div' key={index}>
                            <div className="child-div" >{item}</div>
                        </div>
                    )
                }) }</p>
    </div>
  )
}

export default StartTrans