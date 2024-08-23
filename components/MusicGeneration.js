"use client";
import React, { useEffect, useState } from "react";
// import AudioPlayer from "react-modern-audio-player";
import Link from "next/link";
// import Player from "react-wavy-audio";
import "wave-audio-path-player";
import WaveSurferPlayer from "./WavesurferPlayer";
import { fetchMusicListApi } from "@/app/api/Music";
import {
  Row,
  Col,
  Space,
  Table,
  Tag,
  Pagination,
  Button,
  ConfigProvider,
  Modal,
} from "antd";

export default function ImageGeneration() {
  const [generatedSongs, setGeneratedSongs] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    meta: null,
  });

  const fetchGeneratedSongList = async (page, limit) => {
    try {
      const response = await fetchMusicListApi({ page, limit });
      let meta = response?.data?.data?.meta;
      setPagination((prevState) => ({ ...prevState, meta }));
      setGeneratedSongs(response?.data?.data?.data);
    } catch (err) {
      console.error("fetch generated songs failed", err);
    }
  };

  const onChangePagination = (page) => {
    setPagination((prevState) => ({ ...prevState, page }));
  };

  useEffect(() => {
    fetchGeneratedSongList(pagination.page, pagination.pageSize);
  }, [pagination.page]);

  return (
    <>
      <div className="techwave_fn_image_generation_page">
        <div className="generation__page">
          {/* !Generation Header */}
          <div className="generation_history">
            {/* test */}
            <div className="fn__generation_item">
              <div className="item_header">
                <div className="title_holder">
                  <h2 className="prompt_title">
                    Rock, Electronic music, Jazz, Classical music, Soul music,
                    Punk rock, Folk music, Synth-pop, Disco, Ska, House music,
                    Indian classical music, Music of Asia, Gospel music,
                    Genealogy of musical genres, Merengue music, Independent
                    music, Popular music, Country music, Blues, Heavy metal,
                    Alternative rock, World music, Funk, Dance music, Hip hop,
                    Christian music, Vocal music, K-pop, Music of Africa, Indie
                    pop, Salsa music, Music of Brazil, Middle Eastern music, Pop
                    music, Rhythm and blues, Hip hop music, Folk music,
                    Electronic dance music, Reggae, New-age music, Singing,
                    Experimental music, Indie rock, Latin music, Music of Latin
                    America, Modernism, Progressive rock, Bachata, Flamenco,
                    Rock and roll
                  </h2>
                  <p className="negative_prompt_title">
                    Negative prompt: Text, watermarks, off centre, blur, low
                    res, out of frame, cut off, ugly
                  </p>
                </div>
                <div className="item_options">
                  {/* <div className="fn__icon_options medium_size align_right">
                    <Link href="#" className="fn__icon_button">
                      <img src="svg/info.svg" alt="" className="fn__svg" />
                    </Link>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <span className="text">ArtShaper v3</span>
                        </li>
                        <li>
                          <span className="text">512 x 512px</span>
                        </li>
                        <li>
                          <span className="text">March 15, 2023</span>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* <div className="fn__icon_options medium_size align_right">
                    <Link href="#" className="fn__icon_button">
                      <span className="dots" />
                    </Link>
                    <div className="fn__icon_popup">
                      <ul>
                        <li>
                          <Link href="#">Copy Prompt</Link>
                        </li>
                        <li>
                          <Link href="#">Reuse Prompt</Link>
                        </li>
                        <li>
                          <Link href="#">Upscale All</Link>
                        </li>
                        <li>
                          <Link href="#">Download All</Link>
                        </li>
                        <li className="high_priorety">
                          <Link href="#">Delete All</Link>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="item_list">
                <div className="container-fluid">
                  {generatedSongs?.map((generatedSong, index) => (
                    <div className="row w-100 my-2">
                      {/* <span className="text-white">{index + 1}.</span> */}
                      <WaveSurferPlayer song={generatedSong} />
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

                {/* <div className="container-fluid">
                  <div className="row w-100">
                    <WaveSurferPlayer song={song_2} />
                  </div>
                </div> */}

                {/* </ul> */}
              </div>
            </div>
            {/* end of test */}

            <div
              className="generation_more"
              // style={{ marginTop: "100px" }}
            >
              {/* <Link href="pricing" className="techwave_fn_button medium">
                <span>Previous Generations</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
