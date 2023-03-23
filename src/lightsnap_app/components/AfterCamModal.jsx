import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const AfterCamModal = ({isShow,output}) => {
    if(!isShow) return null
  
    const [modalOpen, setModalOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const press = () => {
        setIsOpen(!isOpen);
        window.location.reload(true);
    }

  return (
    <div className={`${isOpen ? "block":"hidden"} fixed inset-0 bg-opacity-25 bg-[#5E5A5A] backdrop-blur flex justify-center items-center px-3`}>
        {modalOpen ? ( 
            <div className='customWalkthrough sm:scale-[60%] md:scale-[40%] px-4 py-5 flex flex-col justify-center items-center bg-white font-[Inter] rounded-2xl'>
                <div className=' '><img className='bg-cover' src={output} /></div>
                <div className='flex gap-20 sm:gap-24 py-5'>
                    <button onClick={press} className='flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#D82020]'>
                        <img src='../icons/return.png' alt='Return Button' className='sm:h-12 sm:w-10' />
                    </button>
                    <button onClick={() => setModalOpen(!modalOpen)} className='flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#13D655]'>
                        <img src='../icons/heart.png' alt='Accept Button' className='sm:h-11 sm:w-12' />
                    </button>
                </div>
            </div>
            
        ):(       
            <div className='relative lg:scale-[80%] py-5 flex flex-col items-center justify-center bg-white font-[Inter] rounded-2xl'> 
                <div className='absolute overflow-hidden -translate-y-[100%] sm:-translate-y-[130%]  w-[169px] h-[190px] sm:w-[200px] sm:h-[200px] bg-black flex items-center'> <img className='bg-cover' src={output}/></div>
                <h1 className=' font-medium pt-8 pb-3 text-4xl sm:text-5xl mt-14 text-black'>Nice!</h1>
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
                    <button onClick={press} className=" rounded-full w-28 h-10 sm:w-52 sm:h-16 text-black bg-[#D9D9D9] border-[#000000] border-2 hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                        <h2 className="font-normal text-base sm:text-xl">Cancel</h2>
                    </button>
                    <button onClick={press} className="rounded-full w-32 h-10 sm:w-52 sm:h-16 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300">
                        <h2 className="font-bold text-base sm:text-xl">Take Another!</h2>
                    </button>
                </div> 
            </div>        
        )}
    </div>
  )
}
