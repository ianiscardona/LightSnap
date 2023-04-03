import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { saveAs } from "file-saver";
export const GalleryModal = ({ open, onClose, image }) => {
  if (!open) return null;

  const [imgOpen, setimgOpen] = useState(true);

  const download = () => {
    setimgOpen(!imgOpen);
    // const blob = await (await fetch(image)).blob();
    // const file= new File([blob],"LightSnap.png",{type: blob.type});
    saveAs(image, "LightSnap");
    // console.log(file);
  };
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur flex justify-center items-center w-full">
      <div onClick={() => onClose()} className="absolute w-full h-full"></div>
      <div className=" relative flex flex-col justify-center items-center font-[Inter]">
        {imgOpen ? (
          <div className="relative customWalkthrough w-80 sm:w-[400px]">
            <img className="relative pb-5" src="../images/mockup.png" />
            <div className="w-full flex content-center">
              <button
                onClick={() => download()}
                className="m-auto rounded-full w-32 h-10 sm:w-52 sm:h-16 text-white border-white border-2 bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"
              >
                <h2 className="font-bold text-base sm:text-xl">OPEN</h2>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 relative customWalkthrough w-80 sm:w-[400px]">
            <div className="relative w-full h-full">
              <img className="" src="../images/mockup.png" />
              <div className=" flex flex-col backdrop-blur absolute top-0 w-full h-full bg-opacity-25">
                <h1 className="text-center font-bold text-2xl sm:text-4xl text-white w-full h-full flex justify-center items-center">
                  Opened
                  <br />
                  in New Tab
                </h1>
                <button
                  onClick={() => onClose()}
                  className="text-white absolute ml-auto p-3 text-4xl top-0 right-0"
                >
                  {" "}
                  <CgCloseO />{" "}
                </button>
              </div>
            </div>
            <div className="w-full flex content-center">
              <button
                onClick={() => onClose()}
                className=" m-auto rounded-full w-32 h-10 sm:w-52 sm:h-16 text-white border-white border-2 bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"
              >
                <h2 className="font-bold text-base sm:text-xl">CLOSE</h2>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
