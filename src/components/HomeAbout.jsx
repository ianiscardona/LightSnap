import React from "react";
import mockup from "/images/mockup.png";

export const HomeAbout = () => {
  return(
    <div className="flex justify-center items-center lg:px-[126px] px-[2rem] py-[2rem] mx-auto rounded-xl shadow-md overflow-hidden lg:h-screen lg:w-full">
        <div className=" lg:flex">
            <div className='lg:shrink-0 self-center lg:w-[60%]'>
                <img src={mockup} 
                className='w-full object-cover lg:h-[40.75em]'/>
            </div>

            <div className=" lg:pl-[2rem] self-end text-right">
                <h1 className=" text-base font-medium lg:pb-[4rem] pb-[1.8rem] pt-[1.1rem]">Ready to capture your moments?</h1>
                <h1 className=" lg:text-5xl text-xl font-bold pb-[1.8rem] lg:pb-[5rem]">A Photo Studio at the <span className="text-[#1C0EB7]"> palm of your hand.</span></h1>
                <p className=" text-justify text-base font-medium">Capture your memories in a flash with LightSnap - the premier photobooth service that brings fun, laughter, and unforgettable moments to your special events. From weddings and birthdays to corporate events and holiday parties, our state-of-the-art photobooths, high-quality prints, and personalized props will make your occasion shine like never before. Let LightSnap illuminate your event with the perfect snapshot!</p>
            </div>
        </div> 

    </div>

  )
};
