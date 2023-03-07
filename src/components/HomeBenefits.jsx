import React from "react";
import { HomeBenefitsCard } from "./HomeBenefitsCard";
import { HomeBenefitsData } from "../data/HomeBenefitsData";

export const HomeBenefits = () => {

  const data = HomeBenefitsData.map(item => {
    return <HomeBenefitsCard 
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
            />
  })

  return (
    <div className='relative bg-[#232325] pb-[52px] lg:pb-[184px] md:pb-[184px]'>
        {/*Benefits Upper Section md:h-screen lg:h-screen*/}
      <div className='w-full text-center text-[#FAF9F6] pt-[60px] lg:pt-[136px] mb-[63px] lg:mb-[83px]'>
        <p className='font-["Inter"] font-medium text-base leading-[19.2px] mb-[43px] lg:mb-[26px] px-20'>
          Planning to hire a photobooth service? We got you!
        </p>
        <h1 className='font-["Galada"] font-normal text-5xl leading-6 lg:text-[64px] mb-[43px] lg:mb-[26px]'>
          LightSnap
        </h1>
        <p className='font-["Inter"] text-lg lg:text-xl px-4'>
          A photobooth that you can <u><b>access anywhere</b></u>, with frames <u><b>tailored for your event</b></u>.
        </p>
      </div>
        {/*Benefits Cards Section*/}
      <div className='bg-black mx-5 lg:mx-28 lg:flex lg:justify-center md:gap-x-8 lg:gap-x-8'>
        {data}
      </div>
    </div>
  );
};
