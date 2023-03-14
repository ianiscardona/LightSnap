import React from "react";

export const Frames = (props) => {
  const toggleClassCheck = (isActive) =>
    isActive ? "border-8 border-[#DBFF00]" : null;
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`w-[77px] h-[77px] relative overflow-hidden snap-start border-2 ${toggleClassCheck(
          props.isActive
        )} transition-all duration-300`}
      >
        <img
          className="overflow-hidden object-cover"
          src={`../public/icons/frameicon/${props.icon}`}
          alt=""
        />
      </button>
    </div>
  );
};