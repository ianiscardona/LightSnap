import React from 'react'
import { Link } from 'react-router-dom'

export const ShareModal = () => {
    
  return (
    <div
    className='fixed inset-0 bg-opacity-25 backdrop-blur flex justify-center items-center'>
        
        <div className='customGetStarted relative p-6 flex flex-col justify-center items-center py-5 bg-slate-400 font-[Inter] rounded-2xl'>
            <div className='absolute overflow-hidden -translate-y-[100%] sm:-translate-y-[130%]  w-[169px] h-[190px] sm:w-[200px] sm:h-[200px] bg-black '></div>
            <h1 className=' font-medium pt-8 pb-3 text-4xl sm:text-5xl mt-14'>Nice!</h1>
            <div className='flex flex-col pb-6 sm:pb-12 gap-y-3 sm:gap-y-5' >
                <button className=" rounded-full w-28 h-10 sm:w-52 sm:h-16 text-black bg-[#1AE92F] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                    <h2 className="font-bold text-base sm:text-xl">Share</h2>
                </button>
                <button className=" rounded-full w-28 h-10 sm:w-52 sm:h-16 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                    <h2 className="font-normal text-base sm:text-xl">Print</h2>
                </button>
                <button className=" rounded-full w-28 h-10 sm:w-52 sm:h-16 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                    <h2 className="font-normal text-base sm:text-xl">Save</h2>
                </button>
            </div>
      
            <div className='flex gap-3'>
                <Link to="/photobooth"><button className=" rounded-full w-28 h-10 sm:w-52 sm:h-16 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                    <h2 className="font-normal text-base sm:text-xl">Cancel</h2>
                </button></Link>
                <Link to="/photobooth"><button className="rounded-full w-32 h-10 sm:w-52 sm:h-16 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                    <h2 className="font-bold text-base sm:text-xl">Take Another!</h2>
                </button></Link>
            </div>      
        </div>
    </div>
  )
}

