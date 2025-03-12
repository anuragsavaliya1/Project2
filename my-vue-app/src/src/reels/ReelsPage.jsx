import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

export default function ReelsPage() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState([]); // Play state for each video
  const [videos, setVideos] = useState([]);
  const baseUrl = "https://shortieb.codderlab.com/";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const config = {
          headers: { key: `boSNvZJdf0daHwdURFhRKNj99Xr3v7Ww` },
        };

        const response = await axios.get(
          "https://shortieb.codderlab.com/client/video/getAllVideos?start=1&limit=20&userId=67cfd258fd2e47ef53b73dfc",
          config
        );

        console.log("Videos fetched:", response.data.data);
        const videoList = response.data.data || [];

        setVideos(videoList);

        // Initialize play state (first video plays by default)
        setPlaying(videoList.map((_, index) => index === 0));
      } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollPosition / windowHeight);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically play the video in the active index & pause others
  useEffect(() => {
    setPlaying((prevPlaying) => prevPlaying.map((_, i) => i === activeIndex));
  }, [activeIndex]);

  const togglePlayPause = (index) => {
    setPlaying((prev) => prev.map((state, i) => (i === index ? !state : false)));
  };

  return (
    <div ref={containerRef} className="reels-container">
      {videos.length > 0 ? (
        videos.map((host, index) => (
          <div key={index} className="reel" onClick={() => togglePlayPause(index)}>
            <ReactPlayer
              ref={(el) => (videoRefs.current[index] = el)}
              url={`${baseUrl}${host.videoUrl}`}
              playing={playing[index]}
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
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
}
