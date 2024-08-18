"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import {
  BsFillStopFill,
  BsFillPlayFill,
  BsSkipForward,
  BsSkipBackward,
} from "react-icons/bs";

export default function WaveSurferPlayer({ song }) {
  //   console.log("song", song);

  const waveformRef = useRef(null);
  let wavesurfer;
  const [playPause, setPlayPause] = useState();

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: [
        // an array of colors, to be applied as gradient color stops to the waveform.
        "#ced4da",
        // "#60efff",
        // // "red",
        // // "green",
        // // "purple",
        // // "yellow",
        // "rgba(0,255,255,.5)",
      ],
      progressColor: "#343a40",
      //   url: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
      url: song.src,
      dragToSeek: true,
      width: "35vw",
      hideScrollbar: true,
      normalize: true,
      barGap: 1,
      height: 60,
      barHeight: 20,
      barRadius: 20,
      barWidth: 5,
    });

    // // new
    // // wavesurfer.on("audioprocess", () => {
    // //   setCurrentTime(formatTime(wavesurfer.getCurrentTime()));
    // // });

    // wavesurfer.on("ready", () => {
    //   setDuration(formatTime(wavesurfer.getDuration()));
    // });
    // // new

    // wavesurfer.on("finish", () => {
    //   console.log("song finished");
    // });

    // // wavesurfer.on("ready", () => {
    // //   console.log("Waveform is ready");
    // //   setDuration(formatTime(wavesurfer.getDuration()));
    // // });
    wavesurfer.on("finish", () => {
      console.log("song finished");
    });

    wavesurfer.on("ready", () => {
      console.log("Waveform is ready");
    });
    return () => {
      wavesurfer.destroy();
    };
  }, []);
  const handleStop = () => {
    if (wavesurfer) {
      wavesurfer.stop();
    }
  };
  const handlePause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleSkipForward = () => {
    if (wavesurfer) {
      wavesurfer.skip(2);
    }
  };
  const handleSkipBack = () => {
    if (wavesurfer) {
      wavesurfer.skip(-2);
    }
  };

  //   new
  //   useEffect(() => {
  //     wavesurfer = WaveSurfer.create({
  //       container: "#waveform",
  //       waveColor: "#ddd",
  //       progressColor: "#007bff",
  //     });

  //     wavesurfer.on("audioprocess", () => {
  //       setCurrentTime(formatTime(wavesurfer.getCurrentTime()));
  //     });

  //     wavesurfer.on("ready", () => {
  //       setDuration(formatTime(wavesurfer.getDuration()));
  //     });

  //     return () => wavesurfer.destroy(); // Cleanup on component unmount
  //   }, []);

  const formatTime = (time) => {
    return [
      Math.floor((time % 3600) / 60), // minutes
      ("00" + Math.floor(time % 60)).slice(-2), // seconds
    ].join(":");
  };

  return (
    <div className="container">
      <div className="sub-container">
        {/* <Image
          src="https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg"
          width={1000}
          height={1000}
          className="audio-image"
        /> */}
        <p>Oceans</p>

        <div>
          <div className="waveform__counter" style={{ color: "#fff" }}>
            {currentTime}
          </div>
          <div className="waveform__duration" style={{ color: "#fff" }}>
            {duration}
          </div>
        </div>

        <div className="d-flex border align-items-center">
          <div
            ref={waveformRef}
            className="wavesurfer-container w-100"
            style={{ backgroundColor: "#fff" }}
          />
          <div className="wavesurfer-controls">
            {/* <button onClick={handleSkipBack}>
            <BsSkipBackward />
          </button> */}
            {/* <button onClick={handlePause}>
              <BsFillPlayFill />
            </button> */}
            <div class="audio-player-btn-container">
              <div class="play-button play-button-nyt">
                <span onClick={handlePause} class="play-arrow">
                  Play
                </span>
              </div>
            </div>
            {/* <button onClick={handleStop}>
            <BsFillStopFill />
          </button>
          <button onClick={handleSkipForward}>
            <BsSkipForward />
          </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
