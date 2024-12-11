import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import VideoElement from "./VideoElement";
import LabelHover from "./LabelHover";
import { CloseCircleFilled } from "@ant-design/icons";
import { Badge, Button } from "antd";
import { useDispatch } from "react-redux";
import { zIndex } from "material-ui/styles";
import { original } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { alertAction } from "@/redux/actions/alertAction";

const promptText =
  "Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors";
const mockOriginalImage =
  "https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";
const CopyIcon = `
    <svg
        width="20" height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6.33301 17L13.9997 17C15.571 17 16.3567 17 16.8449 16.5118C17.333 16.0237 17.333 15.238 17.333 13.6667L17.333 6"
            stroke="white"
            strokeWidth="1.66667"
        ></path>
        <path
            d="M14.333 12.3333C14.333 13.119 14.333 13.5118 14.0889 13.7559C13.8449 14 13.452 14 12.6663 14L4.99967 14C4.214 14 3.82116 14 3.57708 13.7559C3.33301 13.5118 3.33301 13.119 3.33301 12.3333L3.33301 2.66667C3.33301 1.88099 3.33301 1.48816 3.57708 1.24408C3.82116 1 4.214 1 4.99967 1L12.6663 1C13.452 1 13.8449 1 14.0889 1.24408C14.333 1.48816 14.333 1.88099 14.333 2.66667L14.333 12.3333Z"
            fill="white"
        ></path>
    </svg>
`;
const mockVideoList = [
  {
    id: 1,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    subtitle: "By Blender Foundation",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
  },
  {
    id: 2,
    description: "The first Blender Open Movie from 2006",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ],
    subtitle: "By Blender Foundation",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    title: "Elephant Dream",
  },
  {
    id: 3,
    description:
      "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    ],
    subtitle: "By Google",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    title: "For Bigger Blazes",
  },
  {
    id: 4,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    ],
    subtitle: "By Google",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    title: "For Bigger Escape",
  },
  {
    id: 5,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    ],
    subtitle: "By Google",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    title: "For Bigger Fun",
  },
  {
    id: 6,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    ],
    subtitle: "By Google",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    title: "For Bigger Joyrides",
  },
  {
    id: 7,
    description:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    ],
    subtitle: "By Google",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    title: "For Bigger Meltdowns",
  },
  {
    id: 8,
    description:
      "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    ],
    subtitle: "By Blender Foundation",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    title: "Sintel",
  },
  {
    id: 9,
    description:
      "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    ],
    subtitle: "By Garage419",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    title: "Subaru Outback On Street And Dirt",
  },
  {
    id: 10,
    description:
      "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    ],
    subtitle: "By Blender Foundation",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
    title: "Tears of Steel",
  },
  {
    id: 11,
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    ],
    subtitle: "By Garage419",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
    title: "Volkswagen GTI Review",
  },
  {
    id: 12,
    description:
      "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    ],
    subtitle: "By Garage419",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
    title: "We Are Going On Bullrun",
  },
  {
    id: 13,
    description:
      "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    ],
    subtitle: "By Garage419",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
    title: "What care can you get for a grand?",
  },
  {
    id: 14,
    description:
      "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    ],
    subtitle: "By Garage419",
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
    title: "What care can you get for a grand?",
  },
];

function FullscreenVideo(props) {
  const videoId = useParams().id;
  const router = useRouter();
  // const { id } = router.query;

  const [videoInfo, setVideoInfo] = useState(mockVideoList[videoId - 1]);
  const [videoList, setVideoList] = useState(mockVideoList);
  const [backgroundImage, setBackgroundImage] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
  );
  const [indexVideo, setIndexVideo] = React.useState(videoId);

  const dispatch = useDispatch();
  const videoContainerRef = useRef([]);

  const handleGoBackButton = () => {
    router.back();
  };

  const handleCopyPrompt = () => {
    navigator.clipboard
      .writeText(promptText)
      .then(() => {
        dispatch(
          alertAction({
            message: "Copied",
            visibility: true,
            state: "success",
          })
        );
        console.log("Prompt copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleDownload = () => {
    window.alert("Download functionality is not implemented yet.");
  };

  const handleCopyLink = () => {
    window.alert("Copy link functionality is not implemented yet.");
  };

  const handleChangeVideo = (index) => {
    // setVideoSource(videoList.find((video) => video.id === videoId));
    router.push(`/fullscreen-video/${index ?? 1}`);
    //setVideoInfo(videoList.find((video) => video.id === index));
    setIndexVideo(index);
  };

  useEffect(() => {
    videoContainerRef.current[videoId].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  return (
    <div className="w-full h-full bg-gray-800 flex flex-row flex-1">
      <div className="relative w-[85%] h-full p-4 bg-transparent z-0 ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: "blur(80px)",
            zIndex: "-1",
          }}
        ></div>
        <div
          onClick={handleGoBackButton}
          className=" absolute w-fit   z-10 cursor-pointer rounded-lg bg-[#202128]"
        >
          <img src="/svg/close-rectangle.svg" />
        </div>

        <div className="w-full h-full flex flex-row  gap-2 z-10">
          <div className="relative w-[70%] flex flex-col justify-center overflow-hidden">
            <div
              title={`Video ${videoId}`}
              className="py-1 px-1 h-fit rounded-lg overflow-hidden"
              style={{ zIndex: 10 }}
            >
              <VideoElement
                videoId={videoId}
                autoPlay={true}
                disableHovered={true}
                mute={false}
                url={videoInfo?.sources[0]}
                className=" relative w-full cursor-pointer rounded-lg"
                style={{ zIndex: 10 }}
              ></VideoElement>
            </div>
          </div>

          <div className="w-[30%] h-full flex flex-col px-1 gap-3 justify-between">
            <div className="w-full flex flex-col items-center">
              <div
                id="video_content_header"
                className="w-full flex flex-row justify-between items-center"
              >
                <strong className="text-white text-[24px]">Prompt</strong>
                <button
                  onClick={handleCopyPrompt}
                  className="cursor-pointer video-btn flex items-center justify-center rounded-lg px-3 py-2 border  border-white/[0.08] hover:bg-slate-600"
                >
                  <img src="/svg/copy.svg" />
                  <span className="ml-1 text-[14px] text-white">Copy</span>
                </button>
              </div>
              <p className="mt-3 text-white italic">{promptText}</p>
            </div>

            <div id="original_image_wrapper flex flex-col gap-3">
              <strong className="text-white">Original image</strong>
              <img
                src={videoInfo?.thumb ?? mockOriginalImage}
                alt="Original image"
                width={"80"}
                className="rounded-lg overflow-hidden transition-transform duration-150 transform hover:scale-125"
              />
              <div id="prompt_tag_list flex flex-row">
                <Badge className="m-1 text-white">Tag 1</Badge>
                <Badge className="m-1 text-white">Tag 2</Badge>
              </div>
            </div>
            <div className="z-20 all_options flex flex-wrap gap-3  justify-center items-start h-[20%]">
              <button className="flex-grow flex justify-center items-center rounded-[8px] p-2 border border-transparent hover:border-[rgba(214,211,255,0.10)] bg-[rgba(214,241,255,0.12)] hover:bg-[rgba(214,241,255,0.14)] ">
                <img
                  src="/img/recreate-star.png"
                  width="20"
                  height="20"
                  className="w-5 h-5"
                ></img>
                <span className="ml-1 text-[12px] leading-5 font-[500] footer-recreate-button">
                  Re-Create
                </span>
              </button>
              <div className="fn__icon_options medium_size ">
                <button onClick={handleDownload} className="fn__icon_button">
                  <img src="/svg/download.svg" alt="" className="fn__svg" />
                </button>
              </div>
              <div className="fn__icon_options medium_size">
                <button onClick={handleCopyLink} className="fn__icon_button">
                  <img src="/svg/share.svg" alt="" className="fn__svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[15%] h-full  py-[50px]  justify-center items-center  ">
        <div className="flex h-full flex-col gap-3 overflow-y-auto">
          {videoList && videoList?.length >= 0 ? (
            videoList.map((video, index) => (
              <div
                className={`${
                  indexVideo == video.id ? "border" : ""
                } overflow-clip rounded-lg cursor-pointer w-[100px] h-[56px]`}
                ref={(element) => {
                  videoContainerRef.current[video.id] = element;
                }}
                key={`video-index-${index}`}
                onClick={() => handleChangeVideo(video.id)}
              >
                <img
                  src={video.thumb}
                  alt="Video thumbnail"
                  title={`Video ${video.id}`}
                  width={100}
                  height={50}
                  className="object-cover  transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))
          ) : (
            <p className="text-white">No videos found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FullscreenVideo;
