// Hooks

// Keep the seconds elapsed
// theme is a proporty because is passed from outside
// needs to be passed as a property
//<StopWatch theme="dark"></StopWatch>

// If you need a counter to watch how much
// <Item/> <- Counter

//useState returns an array of two values
import React, { useState } from 'react';

export default function StopWatch(params)
{
    const  [seconds, setSeconds] = useState(0)
    return (
        <>
            <p>You clicked {seconds} times</p>
            <button onClick={() => setSeconds(seconds + 1)}>
                Click to add
            </button>
        </>
    )
}

//element.addEventListener("click", function()...) 
// vs JSX expression syntax:
//onClick={() => setSeconds(seconds + 1)}
// onKeyUp
// onKeyDown
// onChange