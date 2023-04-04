import React from "react";

export const WalkthroughInfo = (props) => {
  return (
    <>
      <p className="font-medium text-3xl sm:text-5xl text-center mt-3 sm:mt-20 lg:mt-0">
        {props.header.split(" ").map((val, key) => {
          if (["Mode", "Frame", "Photo", "Print!"].includes(val))
            return (
              <span key={key} style={{ display: "block" }}>
                {val}
              </span>
            );
          return `${val} `;
        })}
      </p>
      <img
        src={`../images/${props.img}`}
        alt="walkthrough"
        className="h-[85%] w-[85%] sm:h-[70%] sm:w-[70%] lg:h-[400px] lg:w-[400px]"
      />
      <p className="font-normal text-sm sm:text-2xl text-center mx-6 sm:mx-20 lg:mx-40 sm:mb-10 lg:mb-5">
        {props.desc.split(" ").map((val, key) => {
          if (
            ["Trio", "Solo", "Duo", "Hold", "Preview!"].includes(
              val.split(",")[0]
            )
          )
            return <b key={key}>{val} </b>;
          return `${val} `;
        })}
      </p>
    </>
  );
};
