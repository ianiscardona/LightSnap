import React from "react";

const ProcessImages = ({ images }) => {
  return (
    <div className="object-cover">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
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
