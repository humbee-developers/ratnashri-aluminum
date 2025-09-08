'use client';

import { useRef, useState } from 'react';
import styles from '@/components/videoPlayer/videoplayer.module.css';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={styles.containerOne} >
      <video
        ref={videoRef}
        className={styles.video}
        src="video/finalVideo.mp4"
        preload="metadata"
        onClick={togglePlayPause}
      />

      <button className={styles.playButton} onClick={togglePlayPause}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
}
