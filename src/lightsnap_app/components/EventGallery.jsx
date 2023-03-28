import React,{useState} from 'react'
import { NavbarEvent } from '../../pages/navbar-event'
import { Placeholder } from './Placeholder';

export const EventGallery = () => {
  const [submit, isSubmit] = useState(false);
  const click = () => isSubmit(!submit);

  return (
    <div className="relative">
      <NavbarEvent />
      <div className={`${submit ? "min-h-screen pb-12":"h-screen"} bg-black/90 pt-20 font-["Inter"] text-white`}>
          <div className='flex flex-col mt-3 mx-7 lg:mx-0 lg:ml-24 lg:mr-16 mb-4 justify-center'> 
            <p className='text-[#FAF9F6] font-bold text-5xl lg:text-7xl mb-7 lg:mb-10 text-center lg:text-left customGalleryFont'>
              Event Gallery
            </p>
            {/* <form className='flex flex-col mx-[8%] lg:mx-0 gap-y-4'> */}
              <label className='font-bold text-xl'>
                Enter Event Code:
              </label>
              <div className='flex flex-col gap-y-4 lg:flex-row'>
                <input type="text" placeholder="Enter Code Here..." className='outline-none bg-[#F9F9F9] border-[1px] border-[#C7C7C7] rounded-[10px] h-12 p-3 text-[#8A8A8A] font-normal lg:w-[450px]' />
                {/* <input onClick={click} type="submit" value="SUBMIT" className='font-medium text-xs text-center py-4 lg:px-7 mx-[30%] lg:mx-5 border-2 border-[#FAF9F6] rounded-[40px]' /> */}
                <button onClick={click} className='font-medium text-xs text-center py-4 lg:px-7 mx-[30%] lg:mx-5 mb-5 lg:mb-0 border-2 border-[#FAF9F6] rounded-[40px] customMarginBottom'>
                  SUBMIT
                </button>
              </div>
            {/* </form> */}
          </div>
          {/* Image Grids */}
          <div className={`mx-7 lg:ml-24 lg:mr-16 flex-wrap gap-5 justify-center lg:justify-start ${submit ? "flex":"hidden"}`}>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
            <div className='h-[9rem] w-[9rem] bg-white'><Placeholder/></div>
          </div>
          {/* Instruction */}
            <div className={`flex flex-col items-center justify-center gap-y-3 ${submit ? "hidden":"block"} customGalleryScale`}>
              <img src="../images/event-gallery-section.png" alt="event-gallery-section" className='h-60 w-60 md:h-72 md:w-72'/>
              <p className='font-medium text-base md:text-xl text-white'>
                Enter Event Code to See Pictures
              </p>
            </div>
      </div>
    </div>
  );
};
