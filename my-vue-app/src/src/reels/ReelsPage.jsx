import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const videos = [
  "https://shortieb.codderlab.com/storage/17383964170121716202629926fashion.mp4",
  "https://shortieb.codderlab.com/storage/173641748477117228350588723.mp4",
  "https://shortieb.codderlab.com/storage/173641743147817228344280891.mp4",
];
export default function ReelsPage() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(Array(videos.length).fill(true)); // Tracks play state of each video

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;

      const index = Math.round(scrollPosition / windowHeight);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToVideo = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
      });
    }
  };
  const togglePlayPause = (index) => {
    setPlaying((prevState) => prevState.map((state, i) => (i === index ? !state : state)));
  };
  return (
    <div ref={containerRef} className="reels-container">
      {videos.map((video, index) => (
        <div key={index} className="reel" onClick={() => togglePlayPause(index)}>
          <ReactPlayer
            ref={(el) => (videoRefs.current[index] = el)}
            url={video}
            playing={playing[index] && index === activeIndex}
            loop
            controls={false}
            muted={false}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />

          {/* Play/Pause Icon */}
          <div className="play-pause-icon">{playing[index] ? "⏸️" : "▶️"}</div>
        </div>
      ))}
    </div>
  );
}
