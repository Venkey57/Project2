import React, { useEffect, useState, useMemo, useDeferredValue } from 'react'

// value: The value you want to defer. It can have any type.
// During the initial render, the returned deferred value will be the same as the value you provided.
// During updates, React will first attempt a re-render with the old value (so it will return the old value),
// and then try another re-render in background with the new value (so it will return the updated value).
 

function useDeferredValueHooks() {
    const [state, setState] = useState("");
    const deferred = useDeferredValue(state);

    const ListData = useMemo(() => {
        const LIST_SIZE = 7500;
        const data = []
        for (let i = 0; i < LIST_SIZE; i++) {
            data.push(<div key={i}>{deferred}</div>)
        }
        return data
    }, [deferred])

    useEffect(()=>{
        console.log(`state - ${state} deferredvalue - ${deferred}`)
    },[state,deferred])

    const handleInputChange = (e) => {
        setState(e.target.value)
    }

    return (
        <>
            <h1>useDeferredValue Hook</h1>
            <input type="text" placeholder='useDeferredValue Hook' className='input-box' value={state} name="state"
                onChange={(e) => handleInputChange(e)}
            />
            {/* {state} */}
            {ListData}

        </>
    )
}
export default useDeferredValueHooks;
