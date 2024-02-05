import React, { useState, useTransition ,startTransition } from 'react'


// useTransition does not take any parameters.
// useTransition returns an array with exactly two items:
// The isPending flag that tells you whether there is a pending transition.
// The startTransition function that lets you mark a state update as a transition.
// const [isPending, startTransition] = useTransition();


function useTransitionHooks() {

    const [input, setInput] = useState("")
    const [isShowing, setIsShowing] = useState(false);
    const [list, setList] = useState([])
    const [loading,transition] = useTransition()


    const handleChanges = (e) => {
        setInput(e.target.value)
        transition(() => {
        const data = [];
        const LIST_SIZE = 5000;
        for (let i = 0; i < LIST_SIZE; i++) {
            data.push(e.target.value)
        }
        setList(data)
        // setIsShowing(!isShowing)
        })
    }

// console.log("render")
    return (
        <>
            <h1>useTransition Hook</h1>
            {/* {isShowing ? "True" : "False"} */}
            <input type="text" className='input-box' placeholder='useTransition Hook' value={input} onChange={handleChanges} />
            {
                loading ? <div className='loading'>LOADING...</div> :
                list?.map((item, index) => {
                    return (
                        <div className='parent-div' key={index}>
                            <div className="child-div" >{item}</div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default useTransitionHooks;
