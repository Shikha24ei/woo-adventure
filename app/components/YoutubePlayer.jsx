import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId }) => {
  return <div className=''><YouTube videoId={videoId} /></div>
};

export default YoutubePlayer;