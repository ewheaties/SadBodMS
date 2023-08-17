import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ videoId }) => {
  const youtubeContainerRef = useRef(null);

  useEffect(() => {
    const container = youtubeContainerRef.current;

    /* const handleResize = () => {
      if (container) {
        const containerWidth = container.offsetWidth;
        const aspectRatio = 9 / 16;
        const containerHeight = containerWidth * aspectRatio;
        // Apply the calculated height to the container
        container.style.height = `${containerHeight}px`;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };*/
  }, []);

  const onReady = (event) => {
    event.target.pauseVideo(); // You can perform actions when the video is ready
  };

  return (
    <div className="youtube" ref={youtubeContainerRef}>
      <YouTube videoId={videoId} onReady={onReady} />
    </div>
  );
};

export default YoutubeVideo;