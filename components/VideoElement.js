import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useRouter } from "next/navigation";
import { setMute } from "wavesurfer";

const VideoElement = (props) => {
  const videoRef = React.useRef(null);
  const { videoId } = props;
  const router = useRouter();

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(props?.autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(
    props?.mute == undefined ? true : false
  );

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
      if (!props?.disableHovered) {
        videoRef.current.play();
        setIsPlaying(true);
      }

      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && isHovered) {
      if (!props?.disableHovered) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
      setIsHovered(false);
    }
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    console.log("Video id: ", videoId);
    router.push(`/fullscreen-video/${videoId ?? 1}`);
  };

  const handleSeek = (event) => {
    const seekTime = event.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      videoRef.current.play();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  useEffect(() => {
    setIsMuted(props?.mute == undefined ? true : false);
  }, []);

  return (
    <div
      className={`${
        props?.className ? props?.className : "h-fit max-w-full"
      } rounded-lg flex flex-col relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full relative rounded-lg">
        <video
          ref={videoRef}
          muted={isMuted}
          className="w-full cursor-pointer rounded-lg"
          id={props.id}
          autoPlay={props?.autoPlay}
          onMouseDown={handleMouseDown}
        >
          <source src={props.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {isHovered && (
          <div className="z-100 absolute bottom-0 left-0 flex items-center py-3 px-2 flex-col w-full">
            <div className="flex flex-row items-center justify-between w-[95%]">
              <div className="flex flex-row items-center justify-start ">
                <button
                  onClick={togglePlayPause}
                  className="text-white  py-1 rounded"
                >
                  {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </button>
                <div className="text-white ml-2">{`${currentTime} / ${duration}`}</div>
              </div>
              <button onClick={toggleMute} className="text-white py-1 rounded">
                {isMuted ? (
                  <img src="/svg/sound-min.svg" width={20} />
                ) : (
                  <img src="/svg/sound-max.svg" width={20} />
                )}
              </button>
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
