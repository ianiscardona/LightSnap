import React,{useState} from 'react'

export const GetStartedCard = () => {

  return (
    <div id="remove" className='flex items-center justify-center bg-white rounded-xl w-[75%] h-[70%] sm:h-[90%] sm:w-[80%] xl:h-[80%] xl:w-[50%]'>
        <div className='flex flex-col items-center font-["Inter"] gap-y-5 sm:gap-y-5 custom xl:scale-[60%]'>
            <p className='font-medium text-3xl text-center sm:text-6xl md:text-5xl lg:text-6xl'>
                Capture that <br />moment.
            </p>
            <img src="../images/walkthrough-1.png" alt="walkthrough-1" className='h-full w-[95%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[80%]'/>
            <p className='font-normal text-base text-center sm:text-2xl lg:text-3xl sm:mb-10 mx-6 sm:mx-14 md:mx-20 lg:mx-24'>
                Capture the magic of the moment and relive it forever - seize the best moments of your event with a single click!
            </p>
            <button className='font-normal text-base sm:text-4xl text-center bg-[#1C0EB7] rounded-[30px] sm:rounded-[100px] px-16 sm:px-20 py-3 sm:py-4 text-white'>
                Get Started!
            </button>
        </div>
    </div> 
  )
}
