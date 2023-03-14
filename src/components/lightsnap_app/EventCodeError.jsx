import React from 'react'
import sad from "/images/sad.png"


export const EventCodeError = () => {
  return (
    <div className='flex flex-col relative items-center w-full h-screen overflow-hidden font-[Inter]'>
        <div className='relative '>
            <div className='relative flex flex-col justify-center items-center bg-[#B70E0E] rounded-b-full
                            -translate-y-[15rem] h-[700px] w-[700px]
                            sm:-translate-y-[27rem] sm:h-[942px] sm:w-[942px]  
                            md:-translate-y-[40rem] md:h-[1250px] md:w-[2500px]'>
                <div className=' absolute flex flex-col justify-center bottom-4 px-10 items-center'>
                    <div className='h-48 w-48  sm:h-48 sm:w-48 md:h-60 md:w-60'> <img src={sad} className=' max-w-full min-w-full' /> </div>
                    <h1 className=" text-white text-3xl sm:text-4xl md:text-5xl font-medium py-10">Event Code not found.</h1>
                    <h1 className=" font-normal text-white pb-10 sm:pb-20 text-sm sm:text-base md:text-xl">Make sure that the code is entered correctly.</h1>
                </div>
                
            </div>
        </div>
        <div className='relative
                        -translate-y-[15rem] px-[4rem] py-[2rem]
                        sm:-translate-y-[27rem] sm:px-[5.438rem] sm:py-[3rem]    
                        md:-translate-y-[41rem] md:px-[5.438rem] md:py-[4rem]'>
        <div className='items-center flex flex-col'>
                <div className='pb-6'>
                  <button className="flex items-center justify-center rounded-full w-28 h-10 sm:w-52 sm:h-16 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                    <h2 className="font-bold text-base sm:text-xl">Back</h2>
                  </button>
                </div>
                <h1 className=' underline text-[#1C0EB7] font-medium text-sm sm:text-xl'>Contact Us</h1>
            </div>
          
        </div>
    </div>
  )
}
