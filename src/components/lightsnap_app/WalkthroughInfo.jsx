import React from 'react'


export const WalkthroughInfo = (props) => {
  console.log(props.id);
  
  if(props.id){
    console.log(props.desc);
  }

  return (
    <>
        <p className='font-medium text-4xl text-center sm:text-6xl md:text-5xl lg:text-6xl'>
            {props.header}
        </p>
        <img src={`../images/${props.img}`} alt="walkthrough-1" className='h-full w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[80%]'/>
        <p className='font-normal text-base text-center sm:text-2xl lg:text-3xl mb-3 sm:mb-10 mx-6 sm:mx-14 md:mx-20 lg:mx-24'>
          {props.id === 1 ? props.desc.split(" ").map((val, key) => {
              if (["Trio", "Solo", "Duo"].includes(val.split(",")[0]))
                return <b key={key}>{val} </b>;
                return `${val} `;
            }):null}

            {props.id === 2 ? props.desc.substr(65).split(" ").map((val, key) => {
              if (["Hold","the","frame","for","Preview!"].includes(val))
                return <b key={key}>{val} </b>;
                return `${val} `;
            }):null}

            {props.id === 3 ? props.desc:null}
            {props.id === 4 ? props.desc:null}
            {/* {props.desc} */}

            {/* {props.desc.split(" ").map((val, key) => {
              if (["Trio", "Solo", "Duo"].includes(val.split(",")[0]))
                return <b key={key}>{val} </b>;
                return `${val} `;

            })} */}
            {/* {props.desc.substr(65).split(" ").map((val, key) => {
              if (["Hold","the","frame","for","Preview!"].includes(val))
                return <b key={key}>{val} </b>;
                return `${val} `;
            })} */}

        </p>
    </>
  )
}
