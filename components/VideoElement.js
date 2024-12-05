import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useRouter } from "next/navigation";

const VideoElement = (props) => {
  const videoRef = React.useRef(null);
  const router = useRouter();

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateTime = () => {
        const current = Math.floor(video.currentTime);
        const total = Math.floor(video.duration);
        setCurrentTime(formatTime(current));
        setDuration(formatTime(total));
      };

      video.addEventListener("timeupdate", updateTime);
      video.addEventListener("loadedmetadata", updateTime);

      return () => {
        video.removeEventListener("timeupdate", updateTime);
        video.removeEventListener("loadedmetadata", updateTime);
      };
    }
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current && !isHovered) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && isHovered) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsHovered(false);
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    router.push(`/fullscreen-video/${event.target.id ?? 1}`);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      videoRef.current.play();
    }
  };

  return (
    <div
      className="h-fit max-w-full rounded-lg flex flex-col relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full relative">
        <video
          ref={videoRef}
          muted
          className="w-full cursor-pointer"
          id={props.id}
          onMouseDown={handleMouseDown}
        >
          <source src={props.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isHovered && (
          <div className="z-100 absolute bottom-0 left-0 flex items-center py-3 px-2 flex-col w-full">
            <div className="flex flex-row items-center justify-start w-[95%]">
              <button
                onClick={togglePlayPause}
                className="text-white  py-1 rounded"
              >
                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
              </button>
              <div className="text-white ml-2">{`${currentTime} / ${duration}`}</div>
            </div>
            <div className="relative w-[95%]">
              <input
                type="range"
                min="0"
                max={Math.floor(videoRef.current?.duration || 0)}
                value={Math.floor(videoRef.current?.currentTime || 0)}
                onChange={handleSeek}
                className="accent-white bg-slate-400 rounded-lg w-full absolute h-[4px] thumb-white"
              />
            </div>
          </div>
        )}
      </div>

      {isHovered && props.children}
    </div>
  );
};

export default VideoElement;
