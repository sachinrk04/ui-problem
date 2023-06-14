import React from 'react';
import "./ThrottleDebounce.scss";
import Throttle from '../../Components/ThrottleDebounce/Throttle';
import Debounce from '../../Components/ThrottleDebounce/Debounce';

export default function ThrottleDebounce() {
    return (
        <div className="throttle-debounce-page">
            <div>
                <p>
                    In JavaScript, throttle and debounce are two techniques used to control the execution of a function based 
                    on time intervals. They are commonly used in scenarios where you want to limit the frequency of function 
                    calls, especially for events like scrolling, resizing, or typing. Let's explore throttle and debounce 
                    individually and provide practical examples for each.
                </p>
            </div>
            <div className="throttle-debounce">
                <div>
                    <h2>Throttle</h2>
                    <p>
                        Throttling limits the rate at which a function can be executed. It ensures that the function 
                        is called at most once within a specified time interval, even if it is triggered multiple times.
                    </p>
                    <Throttle />
                </div>
                <div>
                    <h2>Debounce</h2>
                    <p>
                        Debouncing ensures that a function is executed only after a specified quiet period has passed 
                        since the last function call. It cancels the execution of the previous function call if a new call 
                        is made within the quiet period.
                    </p>
                    <Debounce />
                </div>
            </div>
        </div>
    )
}
