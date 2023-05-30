import React, { useState } from 'react'

export default function Folder({ explorer }) {
    const [expanded, setExpanded] = useState(false);

    if (explorer.folderItems) {
        return (
            <>
                <div onClick={() => setExpanded(!expanded)}>
                    {expanded ? "📂" : "📂"}
                    {explorer.name}
                </div>
                <div className={`explorer-item`} style={{ display: expanded ? 'block' : 'none' }}>
                    {explorer.folderItems.map((item, i) => {
                        return <Folder key={i} explorer={item} />
                    })}
                </div>
            </>
        )
    } else {
        return (
            <div>📄 {explorer.name}</div>
        )
    }
}
