import React, { useState } from 'react'

export default function MovingComponent({ children }) {
    const [state, setState] = useState({ x: 450, y: 100 });

    const onMove = (e) => {
        if ( e.clientX >= 250 && e.clientY >= 70) {
            setState({ x: e.clientX - 20, y: e.clientY - 20 })
        }
    }

    return (
        <div
            className="moving-div"
            onMouseMove={onMove}
            style={{ left: state.x, top: state.y }}
        >
            {children()}
        </div>
    );
}

