import React from 'react';
import "./FolderStructure.scss";
import Folder from '../../Components/Folder/Folder';
import explorer from '../../config/filedata';

export default function FolderStructure() {
    return (
        <div>
            <Folder explorer={explorer} />
        </div>
    )
}
