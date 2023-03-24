import React, { useState, useEffect } from "react";
import mergeImages from "merge-images";

const ProcessImages = ({ capturedImages, selectedFrame, showcaseMode, setOutput }) => {
  const [src, setSrc] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    console.log(selectedFrame);
    let images = [];

    if (showcaseMode === 2) {
      images = capturedImages.map((image, index) => ({
        src: image,
        x: 68,
        y: index === 0 ? 1485 : 60,
      }));
    } else if (showcaseMode === 3) {
      images = capturedImages.map((image, index) => ({
        src: image,
        x: 144,
        y: 145 + index * 646,
      }));
    } else if (showcaseMode === 1) {
      images = capturedImages.map((image) => ({
        src: image,
      }));
    }

    mergeImages([
      ...images,
      {
        src: selectedFrame,
        x: 0,
        y: 0,
      },
    ])
      .then((src) => {
        setOutput(src);
        setSrc(src);
      })
      .catch((err) => setErr(err.toString()));
  }, [capturedImages, selectedFrame, showcaseMode]);

  return (
    <>
    {/* <div className="object-cover border border-black w-fit h-fit">
      
        <img
          src={src}
          alt="Merged Images"
          className="w-full h-full object-cover"
        />

      {err && <p>{err}</p>}
    </div> */}
    </>

  );
};

export default ProcessImages;
// imageMode === 1
//   ? `../images/frames/solo/${
//       FramesData.find((item) => item.id === activeId)?.soloframe
//     }`
//   : imageMode === 2
//   ? `../images/frames/duo/${
//       FramesData.find((item) => item.id === activeId)?.duoframe
//     }`
//   : imageMode === 3
//   ? `../images/frames/trio/${
//       FramesData.find((item) => item.id === activeId)?.trioframe
//     }`
//   : ""

// useEffect(() => {
//   mergeImages([soloSample, frameSample])
//     .then((src) => setSrc(src))
//     .catch((err) => setErr(err.toString()));
// }, []);
// useEffect(() => {
//   mergeImages([
//     { src: duoSample, x: 68, y: 1485 },
//     { src: duoSample, x: 68, y: 60 },
//     { src: frameSample, x: 0, y: 0 },
//   ])
//     .then((src) => setSrc(src))
//     .catch((err) => setErr(err.toString()));
// }, []);
// useEffect(() => {
//   mergeImages([
//     { src: trioSample, x: 144, y: 145 },
//     { src: trioSample, x: 144, y: 793 },
//     { src: trioSample, x: 144, y: 1439 },
//     { src: frameSample, x: 0, y: 0 },
//   ])
//     .then((src) => setSrc(src))
//     .catch((err) => setErr(err.toString()));
// }, []);
