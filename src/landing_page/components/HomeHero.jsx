import React from "react";
import {Link} from "react-router-dom"

export const HomeHero = () => {
  return (
    <div>
      <div className="relative w-full h-screen">
        <div className="absolute w-full h-full bg-hero bg-cover bg-top bg-no-repeat"></div>
        <div className="bg-black opacity-60 w-full h-full absolute"></div>
        <div className="relative mx-14 flex flex-col items-center justify-between min-h-[70vh]">
          <div className="flex flex-row items-center space-x-1 mt-14 md:my-14">
            <img
              src="/public/icons/ls-lens-red.svg"
              className="h-16 md:h-20"
            ></img>
            <div className="font-['Galada'] text-2xl text-white md:text-3xl">
              LightSnap
            </div>
          </div>
          <div className="min-w-[350px] max-w-min text-center md:mb-10 md:min-w-[770px] md:max-w-min">
            <h1 className="text-5xl font-['Inter'] font-bold text-white sm:text-5xl md:text-7xl md:leading-tight">
              Capture Your Memories With Us!
            </h1>
          </div>
          <div className="min-w-[360px] max-w-min text-center mb-16 md:max-w-[500px] md:mb-10">
            <h3 className="text-xl font-['Inter'] font-medium text-white md:text-3xl md:leading-tight">
              Let Lightweight Solutions capture your unforgettable memories and
              moments with LightSnap!
            </h3>
          </div>
        </div>
        <div className="relative mx-14 mb-14 flex flex-col space-y-5 items-center justify-center content-end md:flex-row md:space-y-0 md:space-x-10 2xl:pb-14">
          <button className="flex items-center justify-center rounded-full w-64 h-16 bg-white text-black hover:bg-black hover:text-white focus:bg-black focus:text-white transition-colors duration-300">
            <h2 className="font-medium text-xl">Inquire Now</h2>
          </button>
          <Link to='/eventcode'>
            <button className="flex items-center justify-center rounded-full w-64 h-16 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
              <h2 className="font-medium text-xl">Go to Event!</h2>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
