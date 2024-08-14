"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [count, setCount] = useState(4);
  const [leftMenu, setLeftMenu] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const leftMenuHandler = () => {
    setLeftMenu(!leftMenu);
    document.querySelector(".techwave_fn_wrapper");
    //   .classList.toggle("fn__has_sidebar");
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

  const [sliderValue, setSliderValue] = useState(9);

  const [instrumentalToggled, setInstrumentalToggled] = useState(false);

  const handleInstrumentalToggleChange = () => {
    setInstrumentalToggled(!instrumentalToggled);
  };

  useEffect(() => {
    console.log(instrumentalToggled);
  }, [instrumentalToggled]);

  //test

  return (
    <>
      <div className="techwave_fn_leftpanel">
        <div className="mobile_extra_closer" />
        {/* logo (left panel) */}
        <div className="leftpanel_logo">
          <Link href="/" className="fn_logo">
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
          <div className="generation__sidebar">
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
                <div className="include_area">
                  <textarea id="fn__include_textarea" rows={3} />
                  <textarea
                    className="fn__hidden_textarea"
                    rows={3}
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
                <div className="include_area">
                  <textarea id="fn__include_textarea" rows={3}></textarea>
                  <textarea
                    className="fn__hidden_textarea"
                    rows={3}
                    tabIndex={-1}
                  />
                </div>
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
              </div>
            </div>
          </div>
        </div>
        {/* !content (left panel) */}
      </div>
    </>
  );
}
