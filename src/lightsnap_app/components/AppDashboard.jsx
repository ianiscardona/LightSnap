import React, { useState } from "react";
import { MdFlipCameraAndroid,MdImage } from "react-icons/md";
import { FramesData } from "../data/frames_data";
import { Frames } from "./Frames";
import ProcessImages from "../components/ProcessImages";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

export const AppDashboard = () => {
  const [imageMode, setImageMode] = useState(1);
  const [showcaseMode, setShowcaseMode] = useState(1);
  const [activeId, setActiveId] = useState(1);
  const [capturedImages, setCapturedImages] = useState([]);
  const [videoConstraints, setVideoConstraints] = useState({
    width: 328,
    height: 446,
    facingMode: "user",
  });
  const webcamRef = React.useRef(null);

  const handleModeChange = (imageMode, showcaseMode, width, height) => {
    setImageMode(imageMode);
    setShowcaseMode(showcaseMode);
    setVideoConstraints({ ...videoConstraints, width, height });
  };

  const handleSolo = () => handleModeChange(1, 1, 328, 446);
  const handleDuo = () => handleModeChange(2, 2, 328, 328);
  const handleTrio = () => handleModeChange(3, 3, 328, 185);

  const switchCamera = () => {
    const newFacingMode =
      videoConstraints.facingMode === "user" ? "environment" : "user";
    setVideoConstraints({ ...videoConstraints, facingMode: newFacingMode });
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (capturedImages.length < showcaseMode) {
      setCapturedImages([...capturedImages, imageSrc]);
    }
  };
  // const startCapture = () => {
  //   setInterval(() => {
  //     capture();
  //   }, 5000);
  // };

  const framesInfo = FramesData.map((item, index) => {
    return (
      <Frames
        key={index}
        id={item.id}
        title={item.title}
        icon={item.icon}
        soloframe={item.soloframe}
        duoframe={item.duoframe}
        trioframe={item.trioframe}
        onClick={() => setActiveId(item.id)}
        isActive={activeId === item.id}
      />
    );
  });
  return (
    <>
      <div className="relative w-full h-screen">
        <div className="relative flex flex-col items-center justify-center h-screen">
          <div className="flex overflow-hidden w-[328px] h-[446px] items-center justify-center">
            <div
              className={`object-cover border border-black ${
                showcaseMode == 1
                  ? "w-[328px] h-[446px]"
                  : showcaseMode == 2
                  ? "w-[328px] h-[328px]"
                  : showcaseMode == 3
                  ? "w-[328px] h-[185px]"
                  : ""
              } transition-all`}
            >
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
          </div>

          <div className="relative flex space-x-2 mt-5 mb-5">
            <button
              onClick={handleSolo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 1 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-300`}
            >
              <h2 className="text-base font-medium">Solo</h2>
            </button>
            <button
              onClick={handleDuo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 2 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200`}
            >
              <h2 className="text-base font-medium">Duo</h2>
            </button>
            <button
              onClick={handleTrio}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 3 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200`}
            >
              <h2 className="text-base font-medium">Trio</h2>
            </button>
          </div>
          <div className="px-[35px] w-full flex flex-nowrap overflow-x-auto snap-x mb-3 scroll-pl-[35px]">
            <div className="flex space-x-4">{framesInfo}</div> {/*HERE*/}
          </div>
          <div className="relative grid grid-cols-3 grid-rows-4">
            <button
              onClick={switchCamera}
              className="ml-4 col-start-1 row-start-2 row-span-2 max-w-fit max-h-fit"
            >
              <MdFlipCameraAndroid className="w-11 h-11" />
            </button>
            <button
              onClick={capture}
              className="w-[105px] h-[105px] col-start-2 row-start-1 row-span-full row-end-5 bg-[#D9D9D9] hover:bg-[#848484] focus:bg-[#848484] rounded-full transition-all duration-500"
            >
              <svg viewBox="0 0 24 24" className="w-[105px] h-[105px] m-auto">
                <circle cx="12" cy="12" r="8" fill="black" />
              </svg>
            </button>
              <button className='mr-4 col-start-3 row-start-2 justify-self-end row-span-2 max-w-fit max-h-fit'>
              <Link to="/eventgallery">
                  <MdImage className="w-11 h-11" />
              </Link>
              </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <ProcessImages images={capturedImages} />
      </div>
    </>
  );
};
