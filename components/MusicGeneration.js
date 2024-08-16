"use client";
import React, { useState } from "react";
import AudioPlayer from "react-modern-audio-player";
import Link from "next/link";

const song_1 = [
  {
    name: "music - 1",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
    id: 1,
  },
];

const song_2 = [
  {
    name: "music - 2",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
    id: 1,
  },
];

// const playlist = [
//   {
//     name: "music - 1",
//     writer: "react-modern-audio-player",
//     img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
//     id: 1,
//   },
//   {
//     name: "music - 2",
//     writer: "react-modern-audio-player",
//     img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
//     id: 2,
//   },
//   {
//     name: "music - 3",
//     writer: "react-modern-audio-player",
//     img: "https://cdn.pixabay.com/photo/2022/08/29/08/47/sky-7418364__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/03/audio_54ca0ffa52.mp3",
//     id: 3,
//   },
//   {
//     name: "music - 4",
//     writer: "react-modern-audio-player",
//     img: "https://cdn.pixabay.com/photo/2015/09/22/01/30/lights-951000__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/07/25/audio_3266b47d61.mp3",
//     id: 4,
//   },
//   {
//     name: "music - 5",
//     writer: "react-modern-audio-player",
//     img: "https://cdn.pixabay.com/photo/2022/08/28/18/03/dog-7417233__340.jpg",
//     src: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3",
//     id: 5,
//   },
// ];

export default function ImageGeneration() {
  const [count, setCount] = useState(4);
  const [leftMenu, setLeftMenu] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  // new
  const [progressType, setProgressType] = useState("waveform");
  const [playerPlacement, setPlayerPlacement] = useState("static");

  const [progressType2, setProgressType2] = useState("waveform");
  const [playerPlacement2, setPlayerPlacement2] = useState("static");
  // new

  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const leftMenuHandler = () => {
    setLeftMenu(!leftMenu);
    document
      .querySelector(".techwave_fn_wrapper")
      .classList.toggle("fn__has_sidebar");
  };

  const handleIncrement = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleInput = (event) => {
    const val = event.target.value;
    setSliderValue(val);
  };

  const [sliderValue, setSliderValue] = useState(7);

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
                  <div className="fn__icon_options medium_size align_right">
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
                  </div>
                  <div className="fn__icon_options medium_size align_right">
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
                  </div>
                </div>
              </div>
              <div className="item_list">
                {/* <ul className="fn__generation_list"> */}
                <div className="container-fluid">
                  <div className="row w-100">
                    <div className="col-11">
                      <AudioPlayer
                        playList={song_1}
                        activeUI={{
                          all: true,
                          progress: progressType,
                        }}
                        placement={{
                          player: playerPlacement,
                        }}
                      />
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center border">
                      <button
                        type="button"
                        class="btn btn-labeled btn-warning d-flex align-items-center justify-content-between w-100 px-0"
                      >
                        <img
                          src="img/icon/download.png"
                          style={{ width: "24px" }}
                        ></img>
                        <span className="me-3">Download</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="container-fluid">
                  <div className="row w-100 mt-5">
                    <div className="col-11">
                      <AudioPlayer
                        playList={song_2}
                        activeUI={{
                          all: true,
                          progress: progressType2,
                        }}
                        placement={{
                          player: playerPlacement2,
                        }}
                      />
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center border">
                      <button
                        type="button"
                        class="btn btn-labeled btn-warning d-flex align-items-center justify-content-between w-100 px-0"
                      >
                        <img
                          src="img/icon/download.png"
                          style={{ width: "24px" }}
                        ></img>
                        <span className="me-3">Download</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* </ul> */}
              </div>
            </div>
            {/* end of test */}

            <div className="generation_more" style={{ marginTop: "1000px" }}>
              <Link href="pricing" className="techwave_fn_button medium">
                <span>Previous Generations</span>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="generation__sidebar">
          <div className="sidebar_model">
            <div className={`fn__select_model ${isDropdown ? "opened" : ""}`}>
              <Link href="#" className="model_open">
                <img className="user_img" src="img/user/user.jpg" alt="" />
                <div className="author">
                  <h4 className="subtitle">Model</h4>
                  <h3 className="title">ArtShaper v3</h3>
                </div>
                <span className="fn__icon_button" onClick={handleIsDropdown}>
                  <img src="svg/arrow.svg" alt="" className="fn__svg" />
                </span>
              </Link>
              <div className="all_models">
                <ul>
                  <li>
                    <Link className="selected" href="#">
                      ArtShaper v3
                    </Link>
                  </li>
                  <li>
                    <Link href="#">ArtShaper v2</Link>
                  </li>
                  <li>
                    <Link href="#">GameVisuals</Link>
                  </li>
                  <li>
                    <Link href="#">VintageCar</Link>
                  </li>
                  <li>
                    <Link href="#">ArtDeco</Link>
                  </li>
                  <li>
                    <Link href="#">IceCold</Link>
                  </li>
                  <li>
                    <Link href="#">Water Effect</Link>
                  </li>
                  <li>
                    <Link href="#">Stable Diffusion v2</Link>
                  </li>
                  <li>
                    <Link href="#">Stable Diffusion v1</Link>
                  </li>
                  <li>
                    <Link href="#">Other</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar_details">
            <div className="number_of_images">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className="title generation_title">Lyrics</h4>
                <label className="fn__toggle">
                  <span className="t_in">
                    <input
                      type="checkbox"
                      defaultChecked
                      id="negative_prompt"
                    />
                    <span className="t_slider" />
                    <span className="t_content" />
                  </span>
                  Instrumental
                </label>
              </div>
              <div className="include_area">
                <textarea id="fn__include_textarea" rows={3} />
                <textarea
                  className="fn__hidden_textarea"
                  rows={3}
                  tabIndex={-1}
                />
              </div>
            </div>
            <div className="img_sizes">
              <h4 className="title">Image Dimensions</h4>
              <div className="img_size_select">
                <select>
                  <option defaultValue="512_512">512 x 512px</option>
                  <option value="768_768">768 x 768px</option>
                  <option value="512_1024">512 x 1024px</option>
                  <option value="768_1024">768 x 1024px</option>
                  <option value="1024_1024">1024 x 1024px</option>
                </select>
              </div>
            </div>
            <div className="guidance_scale">
              <h4 className="title">
                Image Dimensions
                <span
                  className="fn__tooltip"
                  title="Select the resoultion of the images."
                >
                  <img src="svg/question.svg" alt="" className="fn__svg" />
                </span>
              </h4>
              <div className="fn__range">
                <div className="range_in">
                  <input
                    type="range"
                    min={1}
                    max={40}
                    value={sliderValue}
                    onChange={handleInput}
                  />
                  <div
                    className="slider"
                    style={{ width: sliderValue * 2.5 + "%" }}
                  ></div>
                </div>
                <div className="value">{sliderValue}</div>
              </div>
            </div>
            <div className="prompt_magic_switcher">
              <h4 className="title">
                <label htmlFor="prompt_switcher">Prompt Magic</label>
                <span
                  className="fn__tooltip"
                  title="TechWave Prompt v3.0. Our custom render pipeline which has much faster compliance and can improve the result with any model selected. Applies a 2x multiplier to accepted costs due to higher GPU overhead."
                >
                  <img src="svg/question.svg" alt="" className="fn__svg" />
                </span>
              </h4>
              <label className="fn__toggle">
                <span className="t_in">
                  <input type="checkbox" defaultChecked id="prompt_switcher" />
                  <span className="t_slider" />
                  <span className="t_content" />
                </span>
              </label>
            </div>
            <div className="contrast_switcher">
              <h4 className="title">
                <label htmlFor="contrast_switcher">High Contrast</label>
                <span
                  className="fn__tooltip"
                  title="If your photo consists of extremely bright and dark areas, then it's considered high contrast. When it has a wide range of tones that go from pure white to pure black, it's medium contrast. No pure whites or blacks and a range of middle tones means it's low contrast."
                >
                  <img src="svg/question.svg" alt="" className="fn__svg" />
                </span>
              </h4>
              <label className="fn__toggle">
                <span className="t_in">
                  <input type="checkbox" id="contrast_switcher" />
                  <span className="t_slider" />
                  <span className="t_content" />
                </span>
              </label>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}