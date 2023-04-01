import React, { useState } from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import {
  Document,
  Image,
  Page,
  PDFDownloadLink,
  StyleSheet,
} from "@react-pdf/renderer";

export const AfterCamModal = ({ isShow, output }) => {
  if (!isShow) return null;

  const [modalOpen, setModalOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const press = () => {
    setIsOpen(!isOpen);
    console.log("Before reload:", window.location.href);
    window.location.reload(true);
    console.log("After reload:", window.location.href);
  };

  console.log(output);

  const shareBtn = async () => {
    const blob = await (await fetch(output)).blob();
    const file = new File([blob], "LightSnap.png", { type: blob.type });

    // const imageExt = output.split(";")[0].split("/")[1];
    // const image = new File([output], `${Date.now()}.${imageExt}`, {type:`image/${imageExt}`} )

    if (navigator.share) {
      navigator
        .share({
          title: "LightSnap",
          text: "Check out this image!",
          files: [file],
        })
        .then(() => {
          console.log("Success");
        });
    } else {
      alert(
        "Your browser does not support share functionality. Save the image instead."
      );
    }
    console.log(image);
  };

  // const printBtn = () => {
  //     window.print()
  // }

  const downloadImg = () => {
    saveAs(output, "LightSnap");
  };

  const PDFFile = () => (
    <Document>
      <Page>
        <Image src={output} />
      </Page>
    </Document>
  );

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-opacity-25 bg-[#5E5A5A] backdrop-blur flex justify-center items-center px-3`}
    >
      {modalOpen ? (
        <div className="scale-[70%] sm:scale-[30%] md:scale-[40%] lg:scale-[20%] px-4 py-5 flex flex-col justify-center items-center bg-white font-[Inter] rounded-2xl">
          <div className=" scale-[95%] ">
            <img className="bg-cover" src={output} />
          </div>
          <div className="flex gap-20 sm:gap-24 py-3">
            <button
              onClick={press}
              className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full bg-[#D82020]"
            >
              <img
                src="../icons/return.png"
                alt="Return Button"
                className="sm:h-12 sm:w-10"
              />
            </button>
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className="flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-full bg-[#13D655]"
            >
              <img
                src="../icons/heart.png"
                alt="Accept Button"
                className="sm:h-11 sm:w-12"
              />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative translate-y-[10%] lg:scale-[80%] py-5 flex flex-col items-center justify-center bg-white font-[Inter] rounded-2xl">
          <div className="absolute overflow-hidden -translate-y-[100%] sm:-translate-y-[105%] h-[200px] sm:h-[250px] bg-black flex items-center">
            {" "}
            <img className="object-cover h-[100%]" src={output} />
          </div>
          <h1 className=" font-medium pt-8 pb-3 text-4xl sm:text-5xl mt-14 text-black">
            Nice!
          </h1>
          <div className="flex flex-col pb-6 sm:pb-5 gap-y-3 sm:gap-y-5">
            <button
              onClick={shareBtn}
              className=" rounded-full w-28 h-10 sm:w-52 sm:h-14 text-black bg-[#1AE92F] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"
            >
              <h2 className="font-bold text-base sm:text-xl">Share</h2>
            </button>
            <PDFDownloadLink document={<PDFFile />} fileName="LightSnapp">
              <button className=" rounded-full w-28 h-10 sm:w-52 sm:h-14 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                <h2 className="font-normal text-base sm:text-xl">Print</h2>
              </button>
            </PDFDownloadLink>
            <button
              onClick={downloadImg}
              className=" rounded-full w-28 h-10 sm:w-52 sm:h-14 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"
            >
              <h2 className="font-normal text-base sm:text-xl">Save</h2>
            </button>
          </div>
          <div className="flex gap-3 px-4">
            <button
              onClick={press}
              className=" rounded-full w-28 h-10 sm:w-52 sm:h-14 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"
            >
              <h2 className="font-normal text-base sm:text-xl">Cancel</h2>
            </button>
            <button
              onClick={press}
              className="rounded-full w-32 h-10 sm:w-52 sm:h-14 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"
            >
              <h2 className="font-bold text-base sm:text-xl">Take Another!</h2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
