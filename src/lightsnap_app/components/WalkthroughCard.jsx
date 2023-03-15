import React,{useState} from 'react'
import { WalkthroughInfo } from './WalkthroughInfo'
import { WalkthroughInfoData } from '../data/walkthrough_info_data'
import {Link} from 'react-router-dom'

export const WalkthroughCard = () => {
  const InfoArray = WalkthroughInfoData.map((item,index) => {
    return <WalkthroughInfo 
              key={index}
              id={item.id}
              header={item.header}
              img={item.img}
              desc={item.desc}
            />
})
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () => setCurrentIndex((currentIndex) => (currentIndex === 0 ? 0 : currentIndex-1))
  const next = () => setCurrentIndex((currentIndex) => (currentIndex === InfoArray.length-1 ? InfoArray.length-1  : currentIndex+1))
  return (
    <div className='flex items-center justify-center h-screen bg-[#F1F1F1] sm:bg-white'>
      <div className='flex items-center justify-center bg-white rounded-xl mx-12 sm:mx-20 customWalkthrough xl:scale-[80%]'>
          <div className='flex flex-col items-center justify-center font-["Inter"] gap-y-4 sm:gap-y-6 xl:scale-90'>
            {InfoArray[currentIndex]}
            <div className='flex items-center justify-center gap-2 sm:gap-6'>
              {InfoArray.map((_,index) => {
              return <div key={index} className={`w-4 h-4 sm:w-8 sm:h-8 bg-[#D9D9D9] rounded-full ${currentIndex === index ? "bg-[rgb(28_14_183)]":"bg-[#D9D9D9]"}`} />
  })}
        </div>
            <div className='flex items-center justify-center mx-8 mb-6 gap-x-3 lg:mb-0'>
              <Link to={`${currentIndex === 0 ? "/photobooth":"/walkthrough"}`}>
                <button onClick={previous} className="font-normal text-base sm:text-3xl text-center bg-[#ECF4EF] rounded-[30px] sm:rounded-[100px] px-10 sm:px-20 py-3 sm:py-4 text-black">
                    {currentIndex === 0 ? "Skip":"Previous"}
                </button>
              </Link>
              <Link to={`${currentIndex === InfoArray.length-1 ? "/photobooth":"/walkthrough"}`}>
                <button onClick={next} className='font-normal text-base sm:text-3xl text-center bg-[#1C0EB7] rounded-[30px] sm:rounded-[100px] px-10 sm:px-20 py-3 sm:py-4 text-white'>
                    {currentIndex === InfoArray.length-1 ? "Start":"Next"}
                </button>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}


