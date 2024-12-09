import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import VideoElement from './VideoElement';
import LabelHover from './LabelHover';
import { CloseCircleFilled } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import { zIndex } from 'material-ui/styles';
import { original } from '@reduxjs/toolkit';

const promptText = "Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors";
const mockOriginalImage = "https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";
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
    { id: 123, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 456, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 789, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 1, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 2, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 3, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 4, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 5, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 6, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 7, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 8, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
    { id: 9, url: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://instructor-academy.onlinecoursehost.com/content/images/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg" },
];

function FullscreenVideo(props) {
    const videoId = useParams().id;
    const videoRef = useRef(null);

    const [videoInfo, setVideoInfo] = useState({
        sources: ["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"],
        thumb: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
        originalImage: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    });
    const [videoList, setVideoList] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState(null);

    useEffect(() => {
        const fetchVideoInfo = async () => {
            setVideoInfo({
                description: "The first Blender Open Movie from 2006",
                sources: [
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                ],
                subtitle: "By Blender Foundation",
                thumb:
                    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
                title: "Elephant Dream",
                originalImage: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
            });

            // TODO: Fetch video by ID here

            // Set background image by video's thumb
            setBackgroundImage("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg");
        };

        fetchVideoInfo();
    }, [videoId]);

    useEffect(() => {
        const fetchVideoList = async () => {
            setVideoList(mockVideoList);

            // TODO: Fetch video list here
        }
        fetchVideoList();
    }, [mockVideoList]);

    const handleGoBackButton = () => {
        window.history.back();
    }

    const handleCopyPrompt = () => {
        navigator.clipboard.writeText(promptText).then(() => {
            console.log("Prompt copied to clipboard!");
        }).catch((err) => {
            console.error("Failed to copy: ", err);
        });
    }

    const handleDownload = () => {
        window.alert("Download functionality is not implemented yet.");
        // TODO: Implement download functionality
    }

    const handleCopyLink = () => {
        window.alert("Copy link functionality is not implemented yet.");
        // TODO: Implement copy link functionality
    }

    const handleChangeVideo = (videoId) => {
        setVideoSource(videoList.find(video => video.id === videoId).url);
    }

    return (
        <div className='w-full bg-gray-800 flex flex-row justify-stretch'>
            <div id="main_video_content" className='relative w-[85%] h-[85vh] p-2 bg-transparent z-0'>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        filter: "blur(80px)",
                        zIndex: "-1"
                    }}
                >
                    {/* This div element is purposely empty */}
                </div>


                <CloseCircleFilled id="detail_video_close_btn"
                    className='absolute cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:opacity-75'
                    title='Close video'
                    style={{
                        fontSize: "32px", top: "5%", left: "2.5%", zIndex: "10"
                    }}
                    onClick={handleGoBackButton}
                />

                <div id="detail_video_wrapper" className='w-full h-[85vh] flex flex-row items-center gap-2 z-10'>
                    <div id="video_control_wrapper" className='relative w-[70%] flex flex-col justify-center overflow-hidden'
                    // style={{
                    //     backgroundImage: `url(${backgroundImage})`,
                    //     backgroundSize: "cover", backgroundPosition: "center",
                    //     filter: "blur(30px)", zIndex: "0"
                    // }}
                    >

                        <div id="round_video_wrapper" title={`Video ${videoId}`} className='py-1 px-1 h-fit rounded-lg overflow-hidden' style={{ zIndex: 10 }}>
                            {/* <video ref={videoRef} className="w-full cursor-pointer rounded-lg"
                                muted controls controlsList='nodownload'
                            >
                                <source src={videoInfo?.sources[0]} type='video/mp4' />
                                <LabelHover />
                            </video> */}
                            <VideoElement videoId={videoId}
                                url={videoInfo?.sources[0]}
                                className=" relative w-full cursor-pointer rounded-lg"
                                style={{ zIndex: 10 }}
                            ></VideoElement>
                        </div>
                    </div>

                    <div id="detail_video_content" className='w-[30%] h-[85vh] flex flex-col justify-evenly px-1 gap-3'>
                        <div id='video_content_header' className='w-full flex flex-row justify-between items-center'>
                            <strong className='text-white text-[24px]'>Prompt</strong>
                            <Button type="text"
                                className="flex cursor-pointer items-center justify-center rounded bg-[rgba(21,22,27,0.7)] p-2"
                                onClick={handleCopyPrompt}
                            >
                                <span dangerouslySetInnerHTML={{ __html: CopyIcon }}></span>
                                <span
                                    className="text-[24px] font-normal leading-[24px] text-white"
                                    aria-label="Copy Prompt"
                                >
                                    Copy
                                </span>
                            </Button>
                        </div>

                        <p className='text-white italic'>{promptText}</p>

                        <div id="original_image_wrapper flex flex-col gap-3">
                            <strong className='text-white'>Original image</strong>
                            <img src={videoInfo?.originalImage ?? mockOriginalImage}
                                alt="Original image"
                                width={"80"}
                                className='rounded-lg overflow-hidden transition-transform duration-150 transform hover:scale-125'
                            />
                            <div id='prompt_tag_list flex flex-row'>
                                <Badge className='m-1 text-white'>Tag 1</Badge>
                                <Badge className='m-1 text-white'>Tag 2</Badge>
                            </div>

                        </div>
                        <div id="modifier_button_list" className='w-full flex flex-row justify-evenly gap-1'>
                            <button className="flex-grow flex justify-center items-center rounded-[8px] p-2 border border-transparent 
                                hover:border-[rgba(214,211,255,0.10)] bg-[rgba(214,241,255,0.12)] hover:bg-[rgba(214,241,255,0.14)] ">
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
                                <button onClick={handleDownload}
                                    className="fn__icon_button border border-transparent hover:border-[rgba(214,211,255,0.10)]"
                                >
                                    <img src="/svg/download.svg" alt="" className="fn__svg" />
                                </button>
                            </div>
                            <div className="fn__icon_options medium_size">
                                <button onClick={handleCopyLink}
                                    className="fn__icon_button border border-transparent hover:border-[rgba(214,211,255,0.10)]"
                                >
                                    <img src="/svg/share.svg" alt="" className="fn__svg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="other_video_list"
                className='w-[15%] h-[750px] py-5 flex flex-col justify-start gap-4 flex-basis items-center overflow-scroll'
            >
                {videoList && videoList?.length >= 0
                    ? videoList.map((video, index) => (
                        <img key={`video-index-${index}`} src={video.thumb} alt="Video thumbnail" title={`Video ${video.id}`}
                            width={"120"}
                            height={"45"}
                            className='w-full h-[100px] cursor-pointer transition-transform duration-150 transform hover:scale-125'
                            onClick={() => handleChangeVideo(video.id)}
                        />
                    ))
                    : <p className='text-white'>No videos found.</p>
                }
            </div>
        </div >
    );
}

export default FullscreenVideo;