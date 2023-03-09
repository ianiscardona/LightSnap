import React from "react";

export const HomeBenefitsCard = (props) => {
    return (
        // Benefits Card
        <div className='font-["Inter"] w-full h-[500px] lg:h-[497px] rounded-[30px] bg-[#F0EFEA] mb-[41px] lg:mb-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]'>
            <div className='w-full h-[222px] md:h-[60%] lg:h-[235px] overflow-hidden p-3'>
                <img src={`../images/benefits/${props.img}`} alt="picture" className='object-cover object-center h-full w-full rounded-2xl'/>
            </div> 
            <h1 className='text-center text-2xl text-black font-semibold mb-3'>
                {props.title}
            </h1>
            <p className='text-center text-base md:text-lg lg:text-sm xl:text-base mx-9 text-[#555151] font-normal'>
                {props.desc}
            </p>
        </div>
    );
};
