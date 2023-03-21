import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AfterCamModal = ({open}) => {
    if(!open) return null
  
    const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className='fixed inset-0 bg-opacity-25 backdrop-blur flex justify-center items-center '>
        {modalOpen ? ( 
            <div className='customGetStarted px-14 py-5 flex flex-col justify-center items-center bg-slate-200 font-[Inter] rounded-2xl'>
                <div className='bg-black w-[300px] h-[400px]'></div>
                <div className='flex gap-20 sm:gap-24 py-5'>
                    <Link to="/photobooth"><button className='flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#D82020]'>
                        <img src='../icons/return.png' alt='Return Button' className='sm:h-12 sm:w-10' />
                    </button></Link>
                    <button onClick={() => setModalOpen(!modalOpen)} className='flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#13D655]'>
                        <img src='../icons/heart.png' alt='Accept Button' className='sm:h-11 sm:w-12' />
                    </button>
                </div>
        </div>
            
        ):(       
            <div className='relative flex flex-col items-center justify-center customGetStarted py-5 bg-slate-400 font-[Inter] rounded-2xl'> 
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
                <div className='flex gap-3 px-4'>
                    <Link to="/photobooth"><button className=" rounded-full w-28 h-10 sm:w-52 sm:h-16 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                        <h2 className="font-normal text-base sm:text-xl">Cancel</h2>
                    </button></Link>
                    <Link to="/photobooth"><button className="rounded-full w-32 h-10 sm:w-52 sm:h-16 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                        <h2 className="font-bold text-base sm:text-xl">Take Another!</h2>
                    </button></Link>
                </div> 
            </div>        
        )}
    </div>
  )
}
