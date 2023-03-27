import React from 'react'

export const FramePreview = (props) => {
  return (
    <div className={`fixed top-0 z-50 bg-[#5E5A5A]/30 backdrop-blur-md h-screen w-screen flex items-center justify-center ${props.isPreview ? null:"hidden"}`}>
        <img src={`../images/frames/${props.frame}`} alt="Selected Frame" className='w-[366px] scale-[75%] sm:scale-100' />
    </div>
    
  )
}
