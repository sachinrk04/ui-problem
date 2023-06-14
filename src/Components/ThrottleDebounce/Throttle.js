import React, { useState } from 'react'

export default function Throttle() {
    const [counter, setCounter] = useState(0);

    const throttle = (func, delay) => {
        let timeoutId;
        return function() {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    func.apply(this, arguments);
                    timeoutId = null;
                }, delay);
            }
        };
    }

    function onClicked() {
        setCounter(counter + 1);
    }

    const throttleCount =  throttle(onClicked, 1000); 


    console.log("setCounter---->", counter)
    return (
        <div>
            <div>You Clicked me: {counter}</div>
            <button onClick={throttleCount}>Click Me</button>
        </div>
    )
}
