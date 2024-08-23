import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer";
// import uuidv4 from "uuid/v4";
import { v4 as uuidv4 } from "uuid";
import useDownloader from "react-use-downloader";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { green, red, blue } from "@material-ui/core/colors";

import PauseIcon from "@material-ui/icons/Pause";
import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Shadows_Into_Light } from "next/font/google";
import Button from "@mui/material/Button";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    minWidth: 240,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    width: "100%",
  },
  list: {
    padding: 0,
  },
  listItem: {
    //paddingBottom: 0
  },
  buttons: {
    padding: theme.spacing(1),
  },
  controls: {
    minWidth: "100px",
  },
  icon: {
    height: 18,
    width: 18,
  },
  avatar: {
    display: "inline-block",
  },
}));
/*
avatar username ostalo layout sa grid

*/
function WaveSurferPlayer({ song }) {
  const wavesurfer = useRef(null);

  const [playerReady, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferId = `wavesurfer--${uuidv4()}`;

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const downloadAudio = (audioUrl, filename) => {
    const link = document.createElement("a");
    link.href = audioUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    const loadWaveSurfer = async () => {
      //   const { default: WaveSurfer } = await import("wavesurfer.js");
      if (song.audio_id && !wavesurfer.current) {
        wavesurfer.current = WaveSurfer.create({
          container: `#${wavesurferId}`,
          waveColor: "grey",
          progressColor: "#4BB543",
          height: 70,
          cursorWidth: 1,
          cursorColor: "lightgray",
          barWidth: 1,
          barGap: 5,
          normalize: true,
          responsive: true,
          fillParent: true,
        });

        wavesurfer.current.load(
          `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/${song?.audio_id}`
        );

        wavesurfer.current.on("ready", () => {
          setPlayerReady(true);
        });

        const handleResize = wavesurfer.current.util.debounce(() => {
          wavesurfer.current.empty();
          wavesurfer.current.drawBuffer();
        }, 150);

        wavesurfer.current.on("play", () => setIsPlaying(true));
        wavesurfer.current.on("pause", () => setIsPlaying(false));
        window.addEventListener("resize", handleResize, false);
      }
    };
    loadWaveSurfer();
    // }
  }, [wavesurfer, song.audio_id]);

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  };

  const stopPlayback = () => wavesurfer.current.stop();

  const classes = useStyles();

  let transportPlayButton;

  if (!isPlaying) {
    transportPlayButton = (
      <IconButton onClick={togglePlayback}>
        <PlayArrowIcon className={classes.icon} />
      </IconButton>
    );
  } else {
    transportPlayButton = (
      <IconButton onClick={togglePlayback}>
        <PauseIcon className={classes.icon} />
      </IconButton>
    );
  }

  return (
    <>
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
            <h4 className="generated-music-title">
              {/* <span>Title: </span> */}
              {song?.title}
            </h4>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ minWidth: "100% !important" }}
        >
          <Grid item xs={1}>
            {transportPlayButton}
            <IconButton onClick={stopPlayback}>
              <StopIcon className={classes.icon} />
            </IconButton>
          </Grid>
          {/* waveform */}
          <Grid item xs={10} id={wavesurferId} />
          <Grid item xs={1}>
            <div className="d-flex align-items-center justify-content-center w-100">
              <Button
                className={`btn-sm ${
                  song?.status === "queued" || song?.status === "processing"
                    ? "disabled"
                    : ""
                }`}
                variant="contained"
                color="success"
                size="small"
                onClick={() =>
                  download(
                    `${process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT}/${song?.audio_id}`,
                    `mht-ai-generated-music-${song?.audio_id}.mp3`
                  )
                }
                disabled={
                  song?.status === "queued" || song?.status === "processing"
                }
              >
                {song?.status == "complete" ? "Download" : "Processing..."}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default WaveSurferPlayer;
