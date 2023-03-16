import React, { useState } from "react";
import image from "/images/benefits/entertainment.jpg";
import { MdFlipCameraAndroid } from "react-icons/md" ;
import { FramesData } from "../data/frames_data";
import { Frames } from "./Frames";

export const AppDashboard = () => {
  const [activeId, setActiveId] = useState(1);
  const [imageMode, setImageMode] = useState(1);
  const [showcaseMode, setShowcaseMode] = useState(1);

  const solo = () => {
    setImageMode(1);
    setShowcaseMode(1);
  };
  const duo = () => {
    setImageMode(2);
    setShowcaseMode(2);
  };
  const trio = () => {
    setImageMode(3);
    setShowcaseMode(3);
  };
  const framesInfo = FramesData.map((item, index) => {
    return (
      <Frames
        key={index}
        id={item.id}
        title={item.title}
        icon={item.icon}
        soloframe={item.soloframe}
        onClick={() => setActiveId(item.id)}
        isActive={activeId === item.id}
      />
    );
  });
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="relative flex flex-col items-center justify-center h-screen">
          <div className="flex overflow-hidden w-[328px] h-[446px] items-center justify-center">
            <img
              className={`object-cover border border-black ${
                showcaseMode == 1
                  ? "w-[328px] h-[446px]"
                  : showcaseMode == 2
                  ? "w-[328px] h-[328px]"
                  : showcaseMode == 3
                  ? "w-[328px] h-[185px]"
                  : ""
              } transition-all`}
              src={
                imageMode === 1
                  ? `../public/images/frames/solo/${
                      FramesData[activeId - 1].soloframe
                    }`
                  : imageMode === 2
                  ? `../public/images/frames/solo/${
                      FramesData[activeId - 1].soloframe
                    }`
                  : imageMode === 3
                  ? `../public/images/frames/solo/${
                      FramesData[activeId - 1].soloframe
                    }`
                  : ""
              }
              alt=""
            />
          </div>

          <div className="relative flex space-x-2 mt-5 mb-5">
            <button
              onClick={solo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 1 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-300`}
            >
              <h2 className="text-base font-medium">Solo</h2>
            </button>
            <button
              onClick={duo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 2 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200`}
            >
              <h2 className="text-base font-medium">Duo</h2>
            </button>
            <button
              onClick={trio}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 3 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200`}
            >
              <h2 className="text-base font-medium">Trio</h2>
            </button>
          </div>
          <div className="px-[35px] w-full flex flex-nowrap overflow-x-auto snap-x mb-3 scroll-pl-[35px]">
            <div className="flex space-x-4">{framesInfo}</div>
          </div>
          <div className="relative grid grid-cols-3 grid-rows-4">
            <button className="ml-4 col-start-1 row-start-2 row-span-2 max-w-fit max-h-fit">
              <MdFlipCameraAndroid className="w-11 h-11" />
            </button>
            <button className="w-[105px] h-[105px] col-start-2 row-start-1 row-span-full row-end-5 bg-[#D9D9D9] hover:bg-[#848484] focus:bg-[#848484] rounded-full transition-all duration-500">
              <svg viewBox="0 0 24 24" className="w-[105px] h-[105px] m-auto">
                <circle cx="12" cy="12" r="8" fill="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
