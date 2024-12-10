"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef, useCallback } from "react";
import "antd-tag-input/dist/style.css";
import TagInput from "antd-tag-input";
import { ReactTags } from "react-tag-autocomplete";
import { Container, Typography, TextField, Box } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { top100Films } from "./mockData";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import { generateMusicApi, fetchMusicStylesApi } from "@/app/api/Music";
import InputPromt from "@/components/InputPromt";

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
    img: "../svg/home.svg",
  },
  {
    title: "Community Feed",
    pathname: "/community-feed",
    img: "..//svg/community.svg",
  },
  {
    title: "Personal Feed",
    pathname: "/personal-feed",
    img: "../svg/person.svg",
    counter: 48,
  },
  {
    title: "Finetuned Models",
    pathname: "/models",
    img: "../svg/cube.svg",
  },
  {
    title: "Image Generation",
    pathname: "/image-generation",
    img: "../svg/image.svg",
  },
  {
    title: "Music Generation (test)",
    pathname: "/music-generation",
    img: "../svg/image.svg",
  },
  {
    title: "AI Chat Bot",
    pathname: "/ai-chat-bot",
    img: "../svg/chat.svg",
  },
  {
    title: "Pricing",
    pathname: "/pricing",
    img: "../svg/dollar.svg",
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
    img: "../svg/logout.svg",
  },
];

export default function GenSettingsLeft({ activeTrueFalse, activeMobileMenu }) {
  const pathname = usePathname();
  const router = useRouter();

  const [isToggle, setToggle] = useState(false);
  const toggleHandle = () => setToggle(!isToggle);

  //test
  const [isDropdown, setIsDropdown] = useState(false);
  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // generator states
  const [generalModeToggled, setGeneralModeToggled] = useState(false);
  const [instrumentalToggled, setInstrumentalToggled] = useState(false);
  const [defaultGenMode, setDefaultGenMode] = useState(true);
  const [hasVocal, setHasVocal] = useState(true);

  // custom mode states
  const [musicStyles, SetMusicStyles] = useState([]);

  const handleInstrumentalToggleChange = () => {
    setInstrumentalToggled(!instrumentalToggled);
    setHasVocal(!hasVocal);
  };

  const handleGeneralModeToggleChange = () => {
    setGeneralModeToggled(!generalModeToggled);
    setDefaultGenMode(!defaultGenMode);
    setInstrumentalToggled(false);
  };

  const handleMusicGeneratorSubmit = async () => {
    // default_mode = true
    if (defaultGenMode) {
      console.log("submit with default mode");
      if (descContent.length <= 10) {
        toast.error("Mô tả bài hát quá ngắn!");
      } else {
        let data = {
          default: defaultGenMode,
          has_vocal: hasVocal,
          prompt: descContent,
        };

        try {
          const response = await generateMusicApi(data);
          if (response?.status == 200) {
            toast.success("Generate nhạc với default mode thành công!");
            handleRefreshPage();
          }
        } catch (err) {
          toast.error(err?.response?.data?.message);
          console.error("generate music with default mode failed:", err);
        }
      }
    } else {
      console.log("submit with custom mode");
      // default_mode = false (custom mode)
      try {
        // instrumental = false - hasVocal = true
        let stylesString = selectedMusicStyles
          .map((item) => item.value)
          .join(", ");

        let bodyData = {};

        if (hasVocal) {
          bodyData = {
            default: defaultGenMode,
            has_vocal: hasVocal,
            prompt: lyricContent,
            title: titleContent,
            styles: stylesString,
          };
        }
        // instrumental = true - hasVocal = false
        // without the prompt (lyrics) field
        else {
          bodyData = {
            default: defaultGenMode,
            has_vocal: hasVocal,
            title: titleContent,
            styles: stylesString,
          };
        }

        // console.log("data:", bodyData);
        const response = await generateMusicApi(bodyData);
        if (response?.status == 200) {
          toast.success("Generate nhạc với custom mode thành công!");
          handleRefreshPage();
        }
      } catch (err) {
        toast.error(err?.response?.data?.message);
        console.error("generate music with custom mode failed:", err);
      }
    }
  };

  const handleFetchMusicStyles = async () => {
    try {
      const response = await fetchMusicStylesApi();
      if (response?.status == 200) {
        SetMusicStyles(response?.data?.data);
      }
    } catch (err) {
      console.error("Fetch music styles failed!");
    }
  };

  useEffect(() => {
    handleFetchMusicStyles();
  }, []);

  // Description
  // const [wordDescLimit, setWordDescLimit] = useState(200);
  // const [{ descContent, descWordCount }, setDescContent] = React.useState({
  //   descContent: "",
  //   descWordCount: 0,
  // });

  const [descCharLimit, setDescCharLimit] = useState(199);
  const [{ descContent, descCharCount }, setDescContent] = React.useState({
    descContent: "",
    descCharCount: 0,
  });

  const setFormattedDescContent = React.useCallback(
    (text) => {
      // let chars = text.lan;
      if (text.length > descCharLimit) {
        toast.error(
          "Bạn đã đạt đến giới hạn ký tự cho phép của mô tả bài hát!"
        );
      } else {
        setDescContent({ descContent: text, descCharCount: text.length });
      }
    },
    [setDescCharLimit, setDescContent]
  );

  React.useEffect(() => {
    // if(wordCount > set)
    setFormattedDescContent(descContent);
  }, []);
  // end of description

  const [LyricCharLimit, setLyricCharLimit] = useState(2700);
  const [{ lyricContent, LyricCharCount }, setLyricContent] = React.useState({
    lyricContent: "",
    LyricCharCount: 0,
  });

  const setFormattedLyricContent = React.useCallback(
    (text) => {
      if (text.length > LyricCharLimit) {
        toast.error("Bạn đã đạt đến giới hạn ký tự cho phép của lyrics");
      } else {
        setLyricContent({ lyricContent: text, LyricCharCount: text.length });
      }
    },
    [LyricCharLimit, setLyricContent]
  );

  const [tileCharLimit, setTitleCharLimit] = useState(79);
  const [{ titleContent, titleCharCount }, setTitleContent] = React.useState({
    titleContent: "",
    titleCharCount: 0,
  });

  const setFormattedTitleContent = React.useCallback(
    (text) => {
      if (text.length > tileCharLimit) {
        toast.error("Bạn đã đạt đến giới hạn ký tự cho phép của title");
      } else {
        setTitleContent({ titleContent: text, titleCharCount: text.length });
      }
    },
    [tileCharLimit, setTitleContent]
  );

  React.useEffect(() => {
    // if(wordCount > set)
    setFormattedLyricContent(lyricContent);
    setFormattedTitleContent(titleContent);
  }, []);
  // end of textarea word limit

  //new
  const [selected, setSelected] = useState([]);

  // const defaultSelectedFilms = top100Films.filter((film) => film.year === 1994);
  const [selectedMusicStyles, setSelectedMusicStyles] = useState([]);
  const [stylesText, setStylesText] = useState("");

  const handleChangeSelectedStyles = (e, value) => {
    // console.log(value);
    setSelectedMusicStyles(value);
  };

  const handleChangeStylesText = (e) => {
    setStylesText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("call enter");
      event.preventDefault(); // Ngăn không cho form submit khi nhấn Enter
      if (stylesText.trim() !== "") {
        let item = {
          id: "123456789",
          value: stylesText.trim(),
        };
        // console.log('call update')
        setSelectedMusicStyles((prevStyles) => [...prevStyles, item]);
        setStylesText(""); // Xóa nội dung của TextField sau khi thêm
      }
    }
  };

  useEffect(() => {
    console.log("selected styles:", selectedMusicStyles);
  }, [selectedMusicStyles]);

  const handleRefreshPage = () => {
    console.log("refresh page...");
    // router.refresh(); // Refresh the page
    // router.push(`/music-generation?refreshId=${new Date().getTime()}`);
    window.location.reload();
    // router.refresh();
    // window.location.reload()
  };

  return (
    <>
      <div className="techwave_fn_leftpanel flex flex-col items-center  dark:bg-black_background ">
        <div className="leftpanel_logo d-flex justify-content-center mb-5 w-full">
          <Link href="/" className="fn_logo">
            <span className="full_logo">
              <img
                src="../img/mht-ai-logo-5.jpg"
                alt=""
                className="desktop_logo"
                style={{ width: "100px", height: "100px" }}
              />
              <img
                src="../img/logo-retina-full.png"
                alt=""
                className="retina_logo"
              />
            </span>
            <span className="short_logo">
              <img
                src="../img/logo-desktop-mini.png"
                alt=""
                className="desktop_logo"
              />
              <img
                src="../img/logo-retina-mini.png"
                alt=""
                className="retina_logo"
              />
            </span>
          </Link>
        </div>
        <InputPromt></InputPromt>
      </div>
    </>
  );
}
