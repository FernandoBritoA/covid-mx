import React from 'react';
import './BackgroundVideo.css';
import Video from '../../assets/covidLoop.mp4';

const BackgroundVideo = () => {
  return (
    <div className='video-container'>
      <video autoPlay loop muted className='bg-video'>
        <source src={Video} />
      </video>
    </div>
  );
};

export default BackgroundVideo;
