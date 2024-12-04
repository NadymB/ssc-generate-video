import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

function FullscreenVideo(props) {
    // const videoId = useParams();
    const videoRef = useRef(null);

    const [videoSource, setVideoSource] = useState("https://www.w3schools.com/html/mov_bbb.mp4");


    useEffect(() => {
        const fetchVideoSource = async () => {
            setVideoSource(videoSource);

            // TODO: Fetch video by ID here
        };

        fetchVideoSource();
    }, []);

    return (
        <div className='w-full  flex flex-row justify-stretch'>
            <div id="main_video_content" className='w-[600px]' >
                <video ref={videoRef} muted className="w-full cursor-pointer"
                    controls controlsList='nodownload'>
                    <source src={videoSource} type='video/mp4' />
                </video>
            </div>

            <div id="other_video_list" className='w-[600px]' >
                <h1 className='text-sky-400'>Other video list</h1>
            </div>
        </div>
    );
}

export default FullscreenVideo;