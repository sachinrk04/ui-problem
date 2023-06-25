import React from 'react';
import AceEditor from 'react-ace';
import "./CodeEditor.scss";
import { getPastelIndexFor } from './getPastelIndexFor';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const convertCodeIndexToRowCol = (code, index) => {
    let col = 0;
    let row = 0;
    let head = 0;
    while (head < index) {
      col += 1;
  
      if (code[head - 1] === '\n') {
        row += 1;
        col = 1;
      }
  
      head += 1;
      if (head >= code.length) {
        throw new Error(`head=${head}, code.length=${code.length}`)
      }
    }
  
    if (code[head - 1] === '\n') {
      row += 1;
      col = 0;
    }
  
    return { row, col };
};

export default function CodeEditor({classes, code = '', markers = [] }) {

    function onChange(newValue) {
        console.log("change", newValue);
    }

    return (
        <div className='code-editor-page'>
            <AceEditor 
                style={{
                    maxWidth: 500,
                    marginLeft: -15,
                    marginRight: -15,
                    border: "2px solid red",
                }}
                mode="javascript"
                theme="github"
                value={code}
                onChange={onChange}
                name="code-editor"
                editorProps={{ $blockScrolling: true }}
                fontSize={14}
                tabSize={2}
                markers={
                    markers.map(({ start, end }, idx) => ({
                      startRow: convertCodeIndexToRowCol(code, start).row,
                      startCol: convertCodeIndexToRowCol(code, start).col,
                      endRow: convertCodeIndexToRowCol(code, end).row,
                      endCol: convertCodeIndexToRowCol(code, end).col,
                      className: `active-function-marker${getPastelIndexFor(idx)}`,
                      type: 'text',
                    }))
                }
            />
        </div>
    )
}
