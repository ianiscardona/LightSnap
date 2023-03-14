import React, { useState } from "react";
import image from "/images/benefits/entertainment.jpg";
import { MdFlipCameraAndroid } from "react-icons/md";
import { Frames } from "./Frames";

export const AppDashboard = () => {
  const [imageMode, setImageMode] = useState(1);
  const [showcaseMode, setShowcaseMode] = useState(1);
  const [activeId, setActiveId] = useState(1);

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

  // function handleImageMode(event) {
  //   setImageMode(event.target.key);
  // }

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
              src={image}
            />
          </div>

          <div className="relative flex space-x-2 mt-5 mb-5">
            <button
              // key={"solo"}
              onClick={solo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 1 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-300`}
            >
              <h2 className="text-base font-medium">Solo</h2>
            </button>
            <button
              // key={"duo"}
              onClick={duo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 2 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200`}
            >
              <h2 className="text-base font-medium">Duo</h2>
            </button>
            <button
              // key={"trio"}
              onClick={trio}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 3 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200`}
            >
              <h2 className="text-base font-medium">Trio</h2>
            </button>
          </div>
          <div className="px-[35px] w-full flex flex-nowrap overflow-x-auto snap-x mb-3 scroll-pl-[35px]">
            <div className="flex space-x-4">
              <Frames
                onClick={() => setActiveId(1)}
                isActive={activeId === 1}
              />
              <Frames
                onClick={() => setActiveId(2)}
                isActive={activeId === 2}
              />
              <Frames
                onClick={() => setActiveId(3)}
                isActive={activeId === 3}
              />
              <Frames
                onClick={() => setActiveId(4)}
                isActive={activeId === 4}
              />
              <Frames
                onClick={() => setActiveId(5)}
                isActive={activeId === 5}
              />

              <Frames
                onClick={() => setActiveId(6)}
                isActive={activeId === 6}
              />

              <Frames
                onClick={() => setActiveId(7)}
                isActive={activeId === 7}
              />

              <Frames
                onClick={() => setActiveId(8)}
                isActive={activeId === 8}
              />

              <Frames
                onClick={() => setActiveId(9)}
                isActive={activeId === 9}
              />
            </div>
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
