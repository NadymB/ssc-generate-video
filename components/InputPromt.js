import React, { useEffect, useState } from "react";

function InputPrompt() {
  const [stateActive, setStateActive] = useState("text");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      console.log("Selected file:", file);
      setSelectedImage(file);
    } else {
      console.error("Selected file is not an image.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Submitted:", {
      type: stateActive,
      prompt,
      image: selectedImage,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] rounded-2xl flex flex-col bg-black_promt items-center justify-center text-sm font-medium text-center text-white"
    >
      <ul className="flex flex-row p-4 gap-5">
        <li className="relative flex flex-col items-center justify-center h-full">
          <button
            type="button"
            onClick={() => setStateActive("text")}
            className={`mt-2 mb-2 ${
              stateActive === "text" ? "button-tab-active" : ""
            }`}
          >
            <span className="editor-header-tab-item">Text to Video</span>
          </button>
          {stateActive === "text" && (
            <div className="absolute bottom-1 bg-white h-[1px] border-[2px] w-[80%]"></div>
          )}
        </li>
        <li className="relative flex flex-col items-center justify-center h-full">
          <button
            type="button"
            onClick={() => setStateActive("image")}
            className={`mt-2 mb-2 ${
              stateActive === "image" ? "button-tab-active" : ""
            }`}
          >
            <span className="editor-header-tab-item">Text to Video</span>
          </button>
          {stateActive === "image" && (
            <div className="absolute bottom-1 bg-white h-[1px] border-[2px] w-[80%]"></div>
          )}
        </li>
      </ul>

      <div className="flex flex-col bg-gray_promt w-full rounded-2xl border-b border-gray-200 min-h-[150px]">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border-0 rounded-2xl p-4 mb-10 min-h-[150px] bg-gray_promt text-white"
          placeholder="Share your story here"
        ></textarea>

        {stateActive === "image" && (
          <div className="w-full relative">
            <div className="ml-4 mb-2 gap-2 flex flex-col relative">
              {selectedImage && (
                <div className="relative w-fit">
                  <button
                    type="button"
                    className="absolute right-0 top-0"
                    onClick={removeImage}
                  >
                    <img
                      src="/svg/delete.svg"
                      width={15}
                      alt="Delete"
                      className="text-white"
                    />
                  </button>

                  <img
                    width={80}
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="rounded-lg"
                  />
                </div>
              )}

              <div
                className="relative rounded-[8%] w-fit"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/svg/image.svg"
                  width={30}
                  alt="Upload"
                  className="cursor-pointer"
                />

                <div
                  className={`absolute top-0 h-full w-full flex items-center justify-center ${
                    isHovered ? "cursor-pointer" : ""
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <button
        type="submit"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Generate
      </button> */}
      <div className="mt-5 cursor-pointer">
        <div className="relative create-btn-container cursor-pointer">
          <div className="create-btn group/create-btn relative z-10 h-[44px] w-[130px] overflow-hidden rounded-[41px] bg-white">
            <div className="z-10 relative flex gap-1 h-full justify-center items-center text-black text-[16px] font-semibold leading-[48px] overflow-hidden rounded-full select-none">
              <img
                src="https://cdn.hailuoai.video/web-assets/img/video-header-credits.png"
                className="w-4 h-4"
                alt="hilo ai video create icon"
              />
              <span>Generate</span>
            </div>
            <div className="createBtn-hoverEffect hidden group-hover/create-btn:block">
              <div></div>
            </div>
          </div>
          <div className="absolute z-0 create-btn-hover-mask hidden group-hover/create-btn:block top-[15px] left-[10px] w-[146px] h-[39px] rounded-[100px] opacity-50 blur-[15px]"></div>
        </div>
      </div>
    </form>
  );
}

export default InputPrompt;
