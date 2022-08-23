import React, { useState } from 'react';

export default function Counter(props)
{
    const  [counter, setcounter] = useState(0)

    const [isLocked, setIsLocked] = useState(false)

    function handleIncrementClick() {
        if (props.enabled) {
            setcounter(counter + 1)
        }
    }

    return (
        <>
            <h1>{counter} counter</h1>
            <button onClick={handleIncrementClick}>Add</button>
        </>
    )
}