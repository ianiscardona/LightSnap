import React from "react";

export const Frames = ({ isActive, onClick }) => {
  const toggleClassCheck = (isActive) =>
    isActive ? "border-8 border-[#DBFF00]" : null;
  return (
    <div>
      <button
        onClick={onClick}
        className={`w-[77px] h-[77px] relative overflow-hidden snap-start border-2 ${toggleClassCheck(
          isActive
        )} transition-all duration-300`}
      ></button>
    </div>
  );
};
