import React from 'react'

export default function SliderInput({ title, min, max, step, defaultv, getvalue }) {
    return (
        <>
            <label>{title}</label>
            <input
                type="range"
                onChange={(e) => getvalue(e.target.value)}
                min={min}
                max={max}
                value={defaultv}
                step={step}
            />
            <div className="values">
                <div>Min: ({min})</div>
                <div>Val: {defaultv}</div>
                <div>Max: ({max})</div>
            </div>
        </>
    );
}
