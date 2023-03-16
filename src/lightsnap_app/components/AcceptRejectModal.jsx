import React from 'react'
import { Link } from 'react-router-dom'

export const AcceptRejectModal = () => {
  return (
    <div 
    className='fixed inset-0 bg-opacity-25 backdrop-blur flex justify-center items-center'>
        
        <div className='customGetStarted px-14 py-5 flex flex-col justify-center items-center bg-slate-200 font-[Inter] rounded-2xl'>
            <div className='bg-black w-[300px] h-[400px]'>
            </div>
            <div className='flex gap-20 sm:gap-24 py-5'>
                <Link to="/photobooth"><button className='flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#D82020]'>
                    <img src='../icons/return.png' alt='Return Button' className='sm:h-12 sm:w-10' />
                </button></Link>
                <Link to="/sharemodal"><button className='flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#13D655]'>
                    <img src='../icons/heart.png' alt='Accept Button' className='sm:h-11 sm:w-12' />
                </button></Link>
            </div>
            
        </div>
    </div>
  )
}
