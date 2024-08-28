"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import WaveSurferPlayer from "./WavesurferPlayer";
import { fetchMusicListApi } from "@/app/api/Music";
import { Row, Col, Pagination } from "antd";
import { usePathname } from "next/navigation";

export default function MusicGeneration({ forceStop, setForceStop }) {
  const [generatedSongs, setGeneratedSongs] = useState([]);
  const [progressSongs, setProgressSongs] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    meta: null,
  });
  // const [currentPlayingId, setCurrentPlayingId] = useState(null); // Lưu ID của player đang phát
  const currentPlayingRef = useRef(null); // Sử dụng useRef thay vì useState

  // Tạo ref để lưu các instance của WaveSurfer
  const wavesurfersRef = useRef([]);

  const pathname = usePathname(); // Use usePathname to track route changes

  // Handle pathname changes (in the cleanup) to stop all players when navigating away from the page
  useEffect(() => {
    // Cleanup function that will run when component unmounts
    return () => {
      console.log(
        "Component unmounted or route changed, stopping all players..."
      );
      stopAllPlayers(); // Stop players when navigating away or unmounting
    };
  }, [pathname]); // Dependency array with pathname ensures the cleanup happens when route changes

  const fetchGeneratedSongList = async (page, limit) => {
    try {
      const response = await fetchMusicListApi({ page, limit });
      let meta = response?.data?.data?.meta;
      setPagination((prevState) => ({ ...prevState, meta }));

      let songs = response?.data?.data?.data;
      setGeneratedSongs(songs);

      let inProgressSongs = songs.filter(
        (song) => song?.status === "processing" || song?.status === "queued"
      );
      setProgressSongs(inProgressSongs);
    } catch (err) {
      console.error("fetch generated songs failed", err);
    }
  };

  const checkSongStatus = async (songId) => {
    try {
      const response = await fetchMusicListApi({ "ids[]": songId });
      const updatedSong = response?.data?.data?.data[0];

      setGeneratedSongs((prevSongs) =>
        prevSongs.map((song) =>
          song.id === updatedSong.id ? updatedSong : song
        )
      );

      if (updatedSong.status === "complete" || updatedSong.status === "error") {
        setProgressSongs((prevSongs) =>
          prevSongs.filter((song) => song.id !== updatedSong.id)
        );
      }
    } catch (err) {
      console.error(`Failed to update song ${songId}`, err);
    }
  };

  useEffect(() => {
    if (progressSongs.length > 0) {
      const interval = setInterval(() => {
        progressSongs.forEach((song) => {
          if (song.status === "queued" || song.status === "processing") {
            checkSongStatus(song.id);
          }
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [progressSongs]);

  useEffect(() => {
    fetchGeneratedSongList(pagination.page, pagination.pageSize);
  }, [pagination.page]);

  const stopAllPlayers = () => {
    Object.values(wavesurfersRef.current).forEach((wavesurfer) => {
      if (wavesurfer) {
        wavesurfer.stop();
      }
    });
  };

  useEffect(() => {
    console.log("call music stop here");
    if (forceStop) {
      stopAllPlayers();
      setForceStop(false);
    }
  }, [forceStop]);

  const handlePlay = (id) => {
    console.log("old player:", currentPlayingRef.current);
    console.log("new player:", id);
    if (currentPlayingRef.current && currentPlayingRef.current !== id) {
      wavesurfersRef.current[currentPlayingRef.current]?.pause();
    }
    currentPlayingRef.current = id;
  };

  const onChangePagination = (page) => {
    stopAllPlayers();
    setGeneratedSongs([]);
    setPagination((prevState) => ({ ...prevState, page }));
  };

  return (
    <>
      <div className="techwave_fn_image_generation_page">
        <div className="generation__page">
          <div className="generation_history">
            <div className="fn__generation_item">
              <div className="item_list">
                <div className="container-fluid">
                  {generatedSongs?.map((generatedSong, index) => (
                    <div className="row w-100 my-2" key={generatedSong.id}>
                      <WaveSurferPlayer
                        song={generatedSong}
                        registerWaveSurfer={(wavesurfer) => {
                          wavesurfersRef.current[generatedSong.id] = wavesurfer;
                        }}
                        onPlay={() => handlePlay(generatedSong.id)}
                      />
                    </div>
                  ))}
                </div>
                <div className="container-fluid">
                  <Row>
                    <Col xs={24}>
                      <div className="user-card-pagination text-end mt-5">
                        <Pagination
                          align="end"
                          total={pagination?.meta?.total}
                          onChange={onChangePagination}
                          current={pagination.page}
                          pageSize={pagination.pageSize}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
