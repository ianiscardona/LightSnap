import React,{useState} from 'react'
import { WalkthroughInfo } from './WalkthroughInfo'
import { WalkthroughInfoData } from '../data/walkthrough_info_data'

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
  const previous = () => setCurrentIndex((currentIndex) => (currentIndex === 0 ? InfoArray.length-1 : currentIndex-1))
  const next = () => setCurrentIndex((currentIndex) => (currentIndex === InfoArray.length-1 ? 0 : currentIndex+1))

  // if(currentIndex === 0){
  //   WalkthroughInfoData[currentIndex].desc.split(" ").map((val, key) => {
  //     if (["Trio", "Solo", "Duo"].includes(val.split(",")[0]))
  //       return <b key={key}>{val} </b>;
  //       return `${val} `;

  // }); console.log(WalkthroughInfoData[currentIndex].desc);}

  return (
    <div className='flex items-center justify-center bg-white rounded-xl w-[75%] h-[70%] sm:h-[90%] sm:w-[80%] xl:h-[80%] xl:w-[50%]'>
      <div className='flex flex-col items-center font-["Inter"] gap-y-3 sm:gap-y-5 walkthroughCustom xl:scale-[60%]'>
          {InfoArray[currentIndex]}
          <div className='flex items-center justify-center gap-2 sm:gap-6'>
            {InfoArray.map((_,index) => {
            return <div key={index} className={`w-4 h-4 sm:w-8 sm:h-8 bg-[#D9D9D9] rounded-full ${currentIndex === index ? "bg-[rgb(28_14_183)]":"bg-[#D9D9D9]"}`} />
})}
          </div>
          <div className='flex items-center justify-center mx-8 gap-x-3'>
            <button onClick={previous} className="font-normal text-base sm:text-4xl text-center bg-[#ECF4EF] rounded-[30px] sm:rounded-[100px] px-10 sm:px-20 py-3 sm:py-4 text-black">
                {currentIndex === 0 ? "Skip":"Previous"}
            </button>
            <button onClick={next} className='font-normal text-base sm:text-4xl text-center bg-[#1C0EB7] rounded-[30px] sm:rounded-[100px] px-10 sm:px-20 py-3 sm:py-4 text-white'>
                {currentIndex === InfoArray.length-1 ? "Start":"Next"}
            </button>
          </div>
      </div>
    </div>
  )
}


