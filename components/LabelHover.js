import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { alertAction } from "@/redux/actions/alertAction";

const LabelHover = () => {
  const [stateHoverCopy, setStateHoverCopy] = useState(null);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setStateHoverCopy(true); // Set to true on hover
  };

  const handleMouseLeave = () => {
    setStateHoverCopy(false); // Set to false when not hovering
  };

  const handleCopyPrompt = () => {
    const promptText =
      "Frozen Glacial Mystical spiral Lighthouse, a minimalist lighthouse landscape with a mystical , Watercolor Clipart, comic, strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft skin, symmetrical, soft lighting, detailed face, concept art, muted colors";
    navigator.clipboard
      .writeText(promptText)
      .then(() => {
        console.log("Prompt copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleDownload = () => {
    const linkToDownload = "https://example.com/file.zip"; // Replace with the actual file link
    const a = document.createElement("a");
    a.href = linkToDownload;
    a.download = ""; // You can specify a filename here if needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyLink = () => {
    const linkToCopy = "https://example.com"; // Replace with the actual link
    navigator.clipboard
      .writeText(linkToCopy)
      .then(() => {
        console.log("Link copied to clipboard!");
        dispatch(
          alertAction({
            message: "Link copied. Go and share this video with your friends!",
            visibility: true,
            state: "success",
          })
        );
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  return (
    <div
      className="z-10 absolute top-[100%] flex flex-col rounded-b-md p-3 gap-3  w-full shadow-[0px_15px_20px_0px_rgba(0,0,0,0.6)] transition-[height] duration-300
        
      "
      style={{
        backgroundImage:
          'url("https://cdn.hailuoai.com/pre/2024-11-12-16/video_cover/1731401761511890699-307238001435230211.jpg?x-oss-process=image/resize,p_50/format,webp")',
      }}
    >
      <div class="absolute left-0 top-0 h-full w-full rounded-b bg-[rgba(19,19,19,0.7)] backdrop-blur-[30px] [-webkit-backdrop-filter:blur(30px)]"></div>
      <div className="z-20 all_options flex flex-wrap gap-3  justify-center">
        <button className="flex-grow flex justify-center items-center rounded-[8px] p-2 border border-transparent hover:border-[rgba(214,211,255,0.10)] bg-[rgba(214,241,255,0.12)] hover:bg-[rgba(214,241,255,0.14)] ">
          <img
            src="/img/recreate-star.png"
            width="20"
            height="20"
            class="w-5 h-5"
          ></img>
          <span className="ml-1 text-[12px] leading-5 font-[500] footer-recreate-button">
            Re-Create
          </span>
        </button>
        <div className="fn__icon_options medium_size ">
          <button onClick={handleDownload} className="fn__icon_button">
            <img src="svg/download.svg" alt="" className="fn__svg" />
          </button>
        </div>
        <div className="fn__icon_options medium_size">
          <button onClick={handleCopyLink} className="fn__icon_button">
            <img src="svg/share.svg" alt="" className="fn__svg" />
          </button>
        </div>
        <div className="fn__icon_options medium_size">
          <Link href="#" className="fn__icon_button">
            <span className="dots" />
          </Link>
          <div className="fn__icon_popup">
            <ul>
              <li className="flex flex-row items-center gap-2">
                <button class="flex items-center p-3 rounded-[8px] text-white/90 hover:text-[#F04248] hover:bg-white/[0.08]">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="fn__svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.99959 2.14063C9.99959 2.4858 9.71977 2.76562 9.37459 2.76562L5.62459 2.76562C5.27942 2.76562 4.99959 2.4858 4.99959 2.14062C4.99959 1.79545 5.27942 1.51562 5.62459 1.51562H9.37459C9.71977 1.51562 9.99959 1.79545 9.99959 2.14063ZM1.1597 4.18536C1.16304 3.8402 1.44555 3.5631 1.79071 3.56644L13.222 3.67699C13.5671 3.68032 13.8443 3.96284 13.8409 4.308C13.8376 4.65316 13.5551 4.93026 13.2099 4.92693L11.8233 4.91352V12.9961C11.8233 13.3413 11.5435 13.6211 11.1983 13.6211H3.80387C3.4587 13.6211 3.17887 13.3413 3.17887 12.9961V4.82992L1.77862 4.81638C1.43346 4.81304 1.15636 4.53052 1.1597 4.18536ZM6.63493 7.30469C6.63493 6.95951 6.35511 6.67969 6.00993 6.67969C5.66475 6.67969 5.38493 6.95951 5.38493 7.30469V10.5637C5.38493 10.9089 5.66475 11.1887 6.00993 11.1887C6.35511 11.1887 6.63493 10.9089 6.63493 10.5637V7.30469ZM8.99186 6.67969C9.33704 6.67969 9.61686 6.95951 9.61686 7.30469V10.5637C9.61686 10.9089 9.33704 11.1887 8.99186 11.1887C8.64669 11.1887 8.36686 10.9089 8.36686 10.5637V7.30469C8.36686 6.95951 8.64668 6.67969 8.99186 6.67969Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span class="ml-1 text-[13px] leading-none">Delete</span>
                </button>
              </li>
              <li className="flex flex-row items-center gap-2">
                <button class="flex items-center p-3 rounded-[8px] text-white/90 hover:bg-white/[0.08]">
                  <img src="svg/report.svg" alt="" className="fn__svg" />
                  <span class="ml-1 text-[13px] leading-none">Report</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="relative z-10 title_holder max-h-[200px] "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className=" text-white font-bold  max-h-12 text-ellipsis overflow-hidden ">
          Prompt: Frozen Glacial Mystical spiral Lighthouse, a minimalist
          lighthouse landscape with a mystical , Watercolor Clipart, comic,
          strybk, full Illustration, 4k, sharp focus, watercolor, smooth soft
          skin, symmetrical, soft lighting, detailed face, concept art, muted
          colors
        </h2>
        {stateHoverCopy && (
          <div
            className="absolute bottom-0 left-0 right-0 top-0 z-50 flex cursor-pointer items-center justify-center rounded  bg-[rgba(21,22,27,0.7)] p-2"
            onClick={handleCopyPrompt}
          >
            <svg
              width="20"
              height="20"
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
            <span
              className="ml-2 text-[13px] font-normal leading-[24px] text-white"
              aria-label="Copy Prompt"
            >
              Copy Prompt
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabelHover;
