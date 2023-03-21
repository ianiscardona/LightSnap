import React, { useState, useEffect } from "react";
import mergeImages from "merge-images";
import soloSample from "/public/images/dg1.jpg";
import duoSample from "/public/images/dg2.jpg";
import trioSample from "/public/images/dg3.jpg";
import frameSample from "/public/images/frames/trio/lws-eleven-frame-trio.png";

const ProcessImages = () => {
  const [src, setSrc] = useState("");
  const [err, setErr] = useState("");

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
  useEffect(() => {
    mergeImages([
      { src: trioSample, x: 144, y: 145 },
      { src: trioSample, x: 144, y: 793 },
      { src: trioSample, x: 144, y: 1439 },
      { src: frameSample, x: 0, y: 0 },
    ])
      .then((src) => setSrc(src))
      .catch((err) => setErr(err.toString()));
  }, []);

  return (
    <div className="object-cover border border-black w-[328px] h-[437px]">
      <img src={src} alt="processed.png" />
      {err && <p>{err} </p>}
    </div>
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
