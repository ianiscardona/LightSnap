import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export const GetStartedCard = () => {

  return (
    <div className='flex items-center justify-center h-screen bg-[#F1F1F1] sm:bg-white'>
        <div className='flex items-center justify-center bg-white rounded-xl mx-12 sm:mx-20'>
            <div className='flex flex-col items-center justify-center font-["Inter"] gap-y-7 sm:gap-y-6 xl:scale-90 customGetStarted'>
                <p className='font-medium text-3xl sm:text-5xl text-center mt-16 sm:mt-20 lg:mt-0'>
                    Capture that<br/>moment.
                </p>
                <img src='../images/walkthrough-1.png' alt='walkthrough-1' className='h-[178px] w-[293px] sm:h-[302px] sm:w-[497px]' />
                <p className='font-normal text-base sm:text-2xl text-center mx-6 sm:mx-20 lg:mx-40 sm:mb-10 lg:mb-5'>
                    Capture the magic of the moment and relive it forever - seize the best moments of your event with a single click!
                </p>
                <Link to='/walkthrough'>
                    <button className='font-normal text-base sm:text-3xl text-center rounded-[30px] sm:rounded-[100px] bg-[#1C0EB7] text-white py-2 sm:py-4 px-16 sm:px-20 mb-12 sm:mb-16 lg:mb-0'>
                        Get Started!
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

