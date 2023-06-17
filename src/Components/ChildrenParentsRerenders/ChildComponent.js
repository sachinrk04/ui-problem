import React from 'react'

export default function ChildComponent({ source }) {
    console.info("ChildComponent re-render from source:--->", source);
    return <div className="child">Child from {source}</div>;
}
