import React, { useState } from 'react';

export default function Clock(params)
{
    const  [seconds, setSeconds] = useState(0)

    function handleIncrementClick() {
        if (seconds < 59) {
            setSeconds(seconds + 1)
        }
    }

    return (
        <>
            <h1>{seconds} seconds</h1>
            <button onClick={handleIncrementClick}>Add</button>
        </>
    )
}