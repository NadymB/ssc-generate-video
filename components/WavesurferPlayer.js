import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer";
import { v4 as uuidv4 } from "uuid";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    minWidth: 240,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  },
  icon: {
    height: 18,
    width: 18,
  },
}));

function WaveSurferPlayer({ song, registerWaveSurfer, onPlay }) {
  let wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferId = `wavesurfer--${uuidv4()}`;
  const classes = useStyles();

  useEffect(() => {
    const loadWaveSurfer = async () => {
      if (song.audio_id && !wavesurfer.current) {
        wavesurfer.current = WaveSurfer.create({
          container: `#${wavesurferId}`,
          waveColor: "grey",
          progressColor: "#4BB543",
          height: 70,
        });

        wavesurfer.current.load(
          `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/${song?.audio_id}`
        );

        registerWaveSurfer(wavesurfer.current); // Đăng ký player

        wavesurfer.current.on("ready", () => setIsPlaying(false));
        wavesurfer.current.on("play", () => {
          setIsPlaying(true);
          onPlay(); // Gọi hàm này khi player bắt đầu phát
        });
        wavesurfer.current.on("pause", () => setIsPlaying(false));
      }
    };
    loadWaveSurfer();
  }, [wavesurfer, song.audio_id]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  };

  const stopPlayback = () => wavesurfer.current.stop();

  return (
    <Card className={`${classes.card} card-sound-wave`}>
      <Grid
          container
          direction="row"
          alignItems="center"
          className="border-bottom"
        >
          <Grid
            item
            xs={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h4 className="generated-music-title d-flex flex-column align-items-center">
              {/* <span>Title: </span> */}
              <span>{song?.title}</span>
              <span style={{fontSize: "14px"}}>({song?.created_by?.name})</span>
            </h4>
          </Grid>
        </Grid>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={1}>
          <IconButton onClick={togglePlayback}>
            {!isPlaying ? (
              <PlayArrowIcon className={classes.icon} />
            ) : (
              <PauseIcon className={classes.icon} />
            )}
          </IconButton>
          <IconButton onClick={stopPlayback}>
            <StopIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item xs={10} id={wavesurferId} />
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="success"
            size="small"
            disabled={song?.status === "queued" || song?.status === "processing"}
          >
            {song?.status === "complete" ? "Download" : song?.status}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default WaveSurferPlayer;
