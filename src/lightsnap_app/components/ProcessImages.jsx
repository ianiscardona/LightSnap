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
    let images = [];

    if (showcaseMode === 2) {
      images = capturedImages.map((image, index) => ({
        src: image,
        x: 68,
        y: index === 0 ? 60 : 1485,
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

  return <></>;
};
export default ProcessImages;
