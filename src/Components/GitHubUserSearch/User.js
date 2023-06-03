import React from 'react'

export default function User({ avatar, url, username }) {
    return (
        <div className="user">
            <img src={avatar} alt="Profile" width="50" height="50" />
            <a href={url} target="_blank" rel="noopener noreferrer">
                {username}
            </a>
        </div>
    );
}
