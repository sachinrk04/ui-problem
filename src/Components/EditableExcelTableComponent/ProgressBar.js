import React from 'react'
import { addClassWhenNeeded } from './utils'

export default function ProgressBar(props) {
    addClassWhenNeeded(props);

    return <div className={`progressBar`} style={{ width: `${props.value * 10}px` }} />;
}
