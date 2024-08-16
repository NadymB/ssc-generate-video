"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import "antd-tag-input/dist/style.css";
import TagInput from "antd-tag-input";
import { ReactTags } from "react-tag-autocomplete";
import { Container, Typography, TextField, Box } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { top100Films } from "./mockData";

const suggestions = [
  { value: 3, label: "Bananas" },
  { value: 4, label: "Mangos" },
  { value: 5, label: "Lemons" },
  { value: 6, label: "Apricots", disabled: true },
];

const data = [
  {
    title: "Home",
    pathname: "/",
    img: "svg/home.svg",
  },
  {
    title: "Community Feed",
    pathname: "/community-feed",
    img: "svg/community.svg",
  },
  {
    title: "Personal Feed",
    pathname: "/personal-feed",
    img: "svg/person.svg",
    counter: 48,
  },
  {
    title: "Finetuned Models",
    pathname: "/models",
    img: "svg/cube.svg",
  },
  {
    title: "Image Generation",
    pathname: "/image-generation",
    img: "svg/image.svg",
  },
  {
    title: "Music Generation (test)",
    pathname: "/music-generation",
    img: "svg/image.svg",
  },
  {
    title: "AI Chat Bot",
    pathname: "/ai-chat-bot",
    img: "svg/chat.svg",
  },
  {
    title: "Pricing",
    pathname: "/pricing",
    img: "svg/dollar.svg",
  },
  {
    title: "Documentation",
    pathname: "/documentation",
    img: "",
  },
  {
    title: "FAQ",
    pathname: "/faq",
    img: "",
  },
  {
    title: "Change Log",
    pathname: "/changelog",
    img: "",
    counter: (
      <>
        <span className="fn__sup">(4.1.2)</span>
      </>
    ),
  },
  {
    title: "Contact Us",
    pathname: "/contact",
    img: "",
  },
  {
    title: "Home #2",
    pathname: "/index-2",
    img: "",
  },
  {
    title: "Log Out",
    pathname: "/sign-in",
    img: "svg/logout.svg",
  },
];

export default function GenSettingsLeft({ activeTrueFalse, activeMobileMenu }) {
  const pathname = usePathname();

  const [isToggle, setToggle] = useState(false);
  const toggleHandle = () => setToggle(!isToggle);

  //test
  const [isDropdown, setIsDropdown] = useState(false);
  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const [generalModeToggled, setGeneralModeToggled] = useState(false);
  const [instrumentalToggled, setInstrumentalToggled] = useState(false);

  const handleInstrumentalToggleChange = () => {
    setInstrumentalToggled(!instrumentalToggled);
  };

  const handleGeneralModeToggleChange = () => {
    setGeneralModeToggled(!generalModeToggled);
    setInstrumentalToggled(false);
  };

  //new
  const [selected, setSelected] = useState([]);

  const defaultSelectedFilms = top100Films.filter((film) => film.year === 1994);
  const [state, setState] = useState(defaultSelectedFilms);

  const handleChange = (e, value) => {
    console.log(value);
    setState(value);
  };

  useEffect(() => {
    console.log("state:", state);
  }, [state]);

  //test

  return (
    <>
      <div className="techwave_fn_leftpanel">
        <div className="mobile_extra_closer" />
        {/* logo (left panel) */}
        <div className="leftpanel_logo">
          <Link href="/music-generation" className="fn_logo">
            <span className="full_logo">
              <img
                src="img/logo-desktop-full.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="img/logo-retina-full.png"
                alt=""
                className="retina_logo"
              />
            </span>
            <span className="short_logo">
              <img
                src="img/logo-desktop-mini.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="img/logo-retina-mini.png"
                alt=""
                className="retina_logo"
              />
            </span>
          </Link>
          <a
            className="fn__closer fn__icon_button desktop_closer"
            onClick={activeTrueFalse}
          >
            <img src="svg/arrow.svg" alt="" className="fn__svg" />
          </a>
          <a
            className="fn__closer fn__icon_button mobile_closer"
            onClick={activeMobileMenu}
          >
            <img src="svg/arrow.svg" alt="" className="fn__svg" />
          </a>
        </div>
        {/* !logo (left panel) */}
        {/* content (left panel) */}
        <div className="leftpanel_content">
          <div className="generation__sidebar generation_mode_1">
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
              <div className="mt-4 border-top">
                <label className="fn__toggle mt-3">
                  <span
                    className="t_in"
                    style={{
                      width: "40px",
                      height: "25px",
                    }}
                  >
                    <input
                      // defaultChecked
                      type="checkbox"
                      id="negative_prompt"
                      checked={generalModeToggled}
                      onChange={handleGeneralModeToggleChange}
                    />
                    <span className="t_slider" />
                    <span className="t_content" />
                  </span>
                  <span className="fs-5">Custom</span>
                </label>
              </div>
            </div>
            {/* default mode */}
            <div
              className={`sidebar_details tab_1 ${
                generalModeToggled ? "hide" : ""
              }`}
            >
              {/* lyrics */}
              <div className="lyrics_of_music">
                <div className="d-flex align-items-center justify-content-between mb-2 mt-4">
                  <h4 className="title generation_title">
                    Lyrics
                    <span
                      className="fn__tooltip"
                      title="Enter the lyrics of music that you want to generate."
                    >
                      <img src="svg/question.svg" alt="" className="fn__svg" />
                    </span>
                  </h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input
                        // defaultChecked
                        type="checkbox"
                        id="negative_prompt"
                        checked={instrumentalToggled}
                        onChange={handleInstrumentalToggleChange}
                      />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                    Instrumental
                  </label>
                </div>
                <div
                  className={`include_area ${
                    instrumentalToggled ? "hide" : ""
                  }`}
                >
                  <textarea
                    className="border border-secondary"
                    id="fn__include_textarea"
                    rows={6}
                  />
                  <textarea
                    className="fn__hidden_textarea"
                    rows={6}
                    tabIndex={-1}
                  />
                </div>
              </div>
              {/* Song description */}
              <div className="song_decription">
                <div className="d-flex align-items-center justify-content-start mb-2 mt-4">
                  <h4 className="title generation_title">
                    Song description
                    <span
                      className="fn__tooltip"
                      title="Enter the song description that you want to generate."
                    >
                      <img src="svg/question.svg" alt="" className="fn__svg" />
                    </span>
                  </h4>
                </div>

                <div className="include_area">
                  <textarea
                    id="fn__include_textarea"
                    className="border border-secondary"
                    rows={6}
                  ></textarea>
                  <textarea
                    className="fn__hidden_textarea"
                    rows={6}
                    tabIndex={-1}
                  />
                </div>
              </div>
            </div>
            {/* custom mode */}
            <div
              className={`sidebar_details tab_1 ${
                !generalModeToggled ? "hide" : ""
              }`}
            >
              {/* lyrics */}
              <div className="lyrics_of_music">
                <div className="d-flex align-items-center justify-content-between mb-2 mt-4">
                  <h4 className="title generation_title">
                    Lyrics
                    <span
                      className="fn__tooltip"
                      title="Enter the lyrics of music that you want to generate."
                    >
                      <img src="svg/question.svg" alt="" className="fn__svg" />
                    </span>
                  </h4>
                  <label className="fn__toggle">
                    <span className="t_in">
                      <input
                        // defaultChecked
                        type="checkbox"
                        id="negative_prompt"
                        checked={instrumentalToggled}
                        onChange={handleInstrumentalToggleChange}
                      />
                      <span className="t_slider" />
                      <span className="t_content" />
                    </span>
                    Instrumental
                  </label>
                </div>
                <div
                  className={`include_area ${
                    instrumentalToggled ? "hide" : ""
                  }`}
                >
                  <textarea
                    className="border border-secondary"
                    id="fn__include_textarea"
                    rows={6}
                  />
                  <textarea
                    className="fn__hidden_textarea"
                    rows={6}
                    tabIndex={-1}
                  />
                </div>
              </div>
              {/* style of music */}
              <div className="style_of_music">
                <div className="d-flex align-items-center justify-content-start mb-2 mt-4">
                  <h4 className="title generation_title">
                    Style of Music
                    <span
                      className="fn__tooltip"
                      title="Enter the styles of music that you want to generate."
                    >
                      <img src="svg/question.svg" alt="" className="fn__svg" />
                    </span>
                  </h4>
                </div>
                <Container className="w-100 px-0">
                  <Autocomplete
                    className="w-100 border border-secondary"
                    id="combo-box-demo"
                    multiple
                    options={top100Films}
                    getOptionLabel={(option) => String(option.title)}
                    style={{ width: 300 }}
                    value={state || []}
                    defaultValue={[top100Films[0]]}
                    renderInput={(params) => (
                      <TextField
                        className="tags-input-field"
                        {...params}
                        // label="Choose styles of music"
                        variant="outlined"
                        name="combo-box-demo"
                      />
                    )}
                    onChange={handleChange}
                  />
                  {/* {state && (
                    <>
                      <Typography variant="h2">{`Фильм: ${state.map(
                        (item) => item.title
                      )}`}</Typography>
                      <Typography variant="h2">{`Год выпуска: ${state.map(
                        (item) => item.year
                      )}`}</Typography>
                    </>
                  )} */}
                </Container>
              </div>

              {/* title of music */}
              <div className="title_of_music">
                <div className="d-flex align-items-center justify-content-between mb-2 mt-4">
                  <h4 className="title generation_title">
                    Title{" "}
                    <span
                      className="fn__tooltip"
                      title="Enter the title of music that you want to generate."
                    >
                      <img src="svg/question.svg" alt="" className="fn__svg" />
                    </span>
                  </h4>
                </div>
                <div className="include_area">
                  <textarea id="fn__include_textarea" rows={3}></textarea>
                  <textarea
                    className="fn__hidden_textarea"
                    rows={3}
                    tabIndex={-1}
                  />
                </div>
              </div>

              {/* others */}
              {/* <div className="img_sizes">
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
                    <input
                      type="checkbox"
                      defaultChecked
                      id="prompt_switcher"
                    />
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
              </div> */}
            </div>
          </div>
        </div>
        {/* !content (left panel) */}
      </div>
    </>
  );
}
