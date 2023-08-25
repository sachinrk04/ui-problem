import React from 'react';
import "./Spinner.scss";

export default function Spinner({spinnerWith = 40, spinnerHeight = 40}) {
    return (
        <div className='spinner-circular'>
            <div className='loader' style={{ width: `${spinnerWith}px`, height: `${spinnerHeight}px`}}></div>
        </div>
    )
}
