import React from 'react'

export default function Menu({ onSelectVideo, videoValues }) {
    return (
      <form onClick={(event) => onSelectVideo(event.target.value)}>
        {videoValues.map((value, i) => (
          <div key={i} className="video-inputs">
            <input key={i} type="radio" name="src" value={value} />
            {value}
          </div>
        ))}
      </form>
    );
};
  
