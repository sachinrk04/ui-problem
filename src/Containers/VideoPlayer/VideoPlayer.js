import React, { useState } from 'react';
import "./VideoPlayer.scss";
import Menu from '../../Components/VideoPlayer/Menu';
import Video from '../../Components/VideoPlayer/Video';

const videos = {
    deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
    snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
    cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
    spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
    bear: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
};

const videoNames = Object.keys(videos);

export default function VideoPlayer() {
    const [videoSrc, setVideoSrc] = useState(videos.spider);

    function onSelectVideo(video) {
        const videoSrc = videos[video];
        setVideoSrc(videoSrc);
    }

    return (
        <div className='video-player-page'>
            <h1>Video Player</h1>
            <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
            <Video videoSrc={videoSrc} />
        </div>
    )
}
