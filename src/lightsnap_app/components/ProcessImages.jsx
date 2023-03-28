import React, { useState, useEffect } from "react";
import mergeImages from "merge-images";

const ProcessImages = ({
  capturedImages,
  selectedFrame,
  showcaseMode,
  setOutput,
}) => {
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
        y: 142 + index * 646,
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

  console.log(src);

  return (
    <>
      <div className="object-cover border border-black w-fit h-fit">
        <img
          src={src}
          alt="Merged Images"
          className="w-full h-full object-cover"
        />

        {err && <p>{err}</p>}
      </div>
    </>
  );
};
export default ProcessImages;
