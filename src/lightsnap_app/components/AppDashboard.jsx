import React, { useState, useRef, useEffect } from "react";
import { MdFlipCameraAndroid, MdImage } from "react-icons/md";
import { FramesData } from "../data/frames_data";
import { Frames } from "./Frames";
import ProcessImages from "../components/ProcessImages";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import { FramePreview } from "./FramePreview";
import { AfterCamModal } from "./AfterCamModal";
import { isMobile } from "react-device-detect";

export const AppDashboard = () => {
  const [imageMode, setImageMode] = useState(1);
  const [showcaseMode, setShowcaseMode] = useState(1);
  const [activeId, setActiveId] = useState(1);
  const [capturedImages, setCapturedImages] = useState([]);
  const [videoConstraints, setVideoConstraints] = useState({
    width: 328,
    height: 446,
    facingMode: "user",
    aspectRatio: 4 / 3,
    mirror: true,
  });
  const webcamRef = useRef(null);
  const intervalRef = useRef(null);
  const [isCaptureFinished, setIsCaptureFinished] = useState(false);
  const [longpress, setLongPress] = useState(false);
  const [output, setOutput] = useState(null);
  const [cue, setCue] = useState(0);
  const [shutterClick, setShutterClick] = useState(false);

  useEffect(() => {
    // const audio = new Audio("../shutter-click.wav");
    console.log("Captured");
  }, [cue]);

  const handleModeChange = (
    imageMode,
    showcaseMode,
    width,
    height,
    aspectRatio,
    mirror
  ) => {
    setImageMode(imageMode);
    setShowcaseMode(showcaseMode);
    setVideoConstraints({
      ...videoConstraints,
      width,
      height,
      aspectRatio,
      mirror,
    });
  };
  const handleSolo = () => {
    if (isMobile) {
      handleModeChange(1, 1, 446, 328, 4 / 3);
    } else {
      handleModeChange(1, 1, 328, 446, 4 / 3);
    }
  };
  const handleDuo = () => {
    handleModeChange(2, 2, 328, 328, 1 / 1);
  };
  const handleTrio = () => {
    if (isMobile) {
      handleModeChange(3, 3, 185, 328, 9 / 16);
    } else {
      handleModeChange(3, 3, 328, 185, 9 / 16);
    }
  };

  const switchCamera = () => {
    const newFacingMode =
      videoConstraints.facingMode === "user" ? "environment" : "user";
    const newMirror = newFacingMode === "user" ? true : false;
    setVideoConstraints({
      ...videoConstraints,
      facingMode: newFacingMode,
      mirror: newMirror,
    });
  };

  const startCapture = () => {
    let width, height;
    if (showcaseMode === 1) {
      width = 1280;
      height = 1706;
    } else if (showcaseMode === 2) {
      width = 1145;
      height = 1145;
    } else if (showcaseMode === 3) {
      width = 1030;
      height = 579;
    }
    intervalRef.current = setInterval(() => {
      setCapturedImages((prevImages) => {
        if (prevImages.length < showcaseMode) {
          return [
            ...prevImages,
            webcamRef.current.getScreenshot({ width, height }),
          ];
        } else {
          clearInterval(intervalRef.current);
          setIsCaptureFinished(true);
          setCue(0);
          return prevImages;
        }
      });
      setCue((prevCue) => prevCue + 1);
    }, 2000);
    setShutterClick(true);
  };

  const framesInfo = () => {
    return FramesData.map((item, index) => {
      let frame;
      if (showcaseMode === 1) {
        frame = item.soloframe;
      } else if (showcaseMode === 2) {
        frame = item.duoframe;
      } else if (showcaseMode === 3) {
        frame = item.trioframe;
      }

      return {
        id: item.id,
        frame,
        frames: (
          <Frames
            key={index}
            id={item.id}
            title={item.title}
            icon={item.icon}
            selectedFrame={frame}
            setActiveId={setActiveId}
            longPress={longpress}
            setLongPress={setLongPress}
            isActive={activeId === item.id}
          />
        ),
      };
    });
  };

  const selectedFrame = framesInfo().find(
    (frame) => frame.id === activeId
  )?.frame;
  console.log(output);
  return (
    <>
      <FramePreview frame={selectedFrame} isPreview={longpress} />
      <div className="relative w-full h-screen">
        <div className="relative flex flex-col items-center justify-center h-screen">
          <div className="flex overflow-hidden w-[328px] h-[437px] items-center justify-center">
            <div
              className={`relative object-cover border border-black ${
                showcaseMode == 1
                  ? "w-[328px] h-[437px]"
                  : showcaseMode == 2
                  ? "w-[328px] h-[328px]"
                  : showcaseMode == 3
                  ? "w-[328px] h-[185px]"
                  : ""
              } transition-all custom-camera`}
            >
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                mirrored={true}
                videoConstraints={videoConstraints}
              />
              <div
                className={`absolute top-0 right-0 bg-[#1C0EB7] text-white rounded-full items-center justify-center h-8 w-8 m-2 ${
                  showcaseMode === 1 ? "hidden" : "flex"
                }`}
              >
                {cue}
              </div>
              {/* <audio src="../shutter-click.wav" className={`${cue ? "block":"hidden"}`} autoPlay/> */}
            </div>
          </div>

          <div className="relative flex space-x-2 mt-5 mb-5 custom-buttons">
            <button
              onClick={handleSolo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 1 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-300 removeTouch`}
            >
              <h2 className="text-base font-medium">Solo</h2>
            </button>
            <button
              onClick={handleDuo}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 2 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200 removeTouch`}
            >
              <h2 className="text-base font-medium">Duo</h2>
            </button>
            <button
              onClick={handleTrio}
              className={`flex items-center justify-center rounded-full w-[102px] h-[29px] bg-[#D9D9D9] text-black ${
                imageMode == 3 ? "bg-[rgb(28_14_183)] text-white" : null
              } transition-all duration-200 removeTouch`}
            >
              <h2 className="text-base font-medium">Trio</h2>
            </button>
          </div>
          <div className="px-[35px] sm:justify-center w-full flex min-h-[70px] overflow-y-hidden flex-nowrap overflow-x-auto snap-x mb-3 scroll-pl-[35px] custom-frames transition-all">
            <div className="flex space-x-4  min-h-fit">
              {framesInfo().map((frame) => frame.frames)}
            </div>
          </div>
          <div className="relative grid grid-cols-3 grid-rows-4 custom-buttons">
            <button
              onClick={switchCamera}
              className="ml-4 col-start-1 row-start-2 row-span-2 max-w-fit max-h-fit transition-all"
            >
              <MdFlipCameraAndroid className="w-11 h-11" />
            </button>
            <button
              disabled={shutterClick}
              onClick={startCapture}
              className="w-[105px] h-[105px] col-start-2 row-start-1 row-span-full row-end-5 bg-[#D9D9D9] hover:bg-[#848484] focus:bg-[#848484] rounded-full transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-[105px] h-[105px] m-auto">
                <circle cx="12" cy="12" r="8" fill="black" />
              </svg>
            </button>
            <button className="mr-4 col-start-3 row-start-2 justify-self-end row-span-2 max-w-fit max-h-fit">
              <Link to="/eventgallery">
                <MdImage className="w-11 h-11" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {isCaptureFinished && (
          <>
            <ProcessImages
              capturedImages={capturedImages}
              showcaseMode={showcaseMode}
              selectedFrame={`/images/frames/${selectedFrame}`}
              setOutput={setOutput}
            />
            <AfterCamModal isShow={isCaptureFinished} output={output} />
          </>
        )}
      </div>
    </>
  );
};
