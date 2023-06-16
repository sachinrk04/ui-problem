import React, { useState } from 'react';
import "./PieChartRangeInput.scss";

export default function PieChartRangeInput() {
    const [value, setValue] = useState(10);

    return (
        <div className='pie-char-page'>
            <div className="this-ui">
                <input 
                    type="range" 
                    onChange={(e) => setValue(e.target.value)}
                    value={value} 
                />
                <div>{value}%</div>
                <div 
                    className="piechart" 
                    style={{ backgroundImage: `conic-gradient(green ${value}%, lightgreen 0)`}}
                ></div>
            </div>
        </div>
    )
}
