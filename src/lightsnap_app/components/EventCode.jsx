import React from 'react'
import {Link} from "react-router-dom"

export const EventCode = () => {
  return (
    <div className='flex flex-col relative items-center w-full h-screen overflow-hidden mx-auto'>
        <div className='relative'>
            <div className=' flex justify-center items-end bg-[#1C0EB7] rounded-b-full
                            -translate-y-[20rem] h-[700px] w-[700px]
                            sm:-translate-y-[35rem] sm:h-[942px] sm:w-[942px]  
                            md:-translate-y-[48rem] md:h-[1250px] md:w-[2500px]
                            lg:-translate-y-[53rem]  '>
                <h1 className=" text-white font-['Galada'] font-normal
                                  text-[4rem] pb-16 
                                  sm:text-8xl sm:pb-32 
                                  md:text-9xl md:pb-40">
                                  LightSnap</h1>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full px-[4rem] font-[Inter]
                        -translate-y-[20rem] py-[.rem] space-y-3
                        sm:-translate-y-[35rem] sm:py-8 sm:space-y-5
                        md:-translate-y-[50rem]
                        lg:-translate-y-[55rem] 
                        '>
                <p className="text-center text-base font-medium w-80 px-[.5rem] pt-5 pb-4 md:px-0">A photobooth that you can access anywhere, with frames tailored for your event.</p>
                
                <form className='flex flex-col justify-center text-center items-center gap-y-2'>
                    <input type="text" placeholder="Enter Event Code" className=' border-[1px] border-[#000000] text-[#000000] text-center rounded-xl w-80 h-12 sm:w-96 sm:h-16'/>
                    <Link to='/getstarted'>
                      <input type="submit" value='Enter' className="flex items-center justify-center text-center rounded-full w-28 h-10 sm:w-52 sm:h-16 text-white bg-[#1C0EB7] hover:bg-[#D7282F] focus:bg-[#D7282F] transition-colors duration-300"/>               
                    </Link>
                </form>
                
                <button className=' underline text-[#1C0EB7] font-medium text-sm sm:text-xl '>Contact Us</button>
        </div>
        
    </div>
  )
}
