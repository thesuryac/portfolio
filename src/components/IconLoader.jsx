import React from "react";

import "./styles/styles.css";

const IconsSlider = ({ reverse = false, list }) => {
  return (
    <div className="scroll h-full">
      <div
        className={` mx-auto ${
          reverse ? "scroll-slide-reverse" : "scroll-slide"
        }`}
      >
        {list.map((icon, index) => (
          <span key={`${index}1`} className="sm:my-[60px] my-[10px] -z-10">
            {icon}
          </span>
        ))}
      </div>
      <div
        className={` mx-auto ${
          reverse ? "scroll-slide-reverse" : "scroll-slide"
        }`}
      >
        {list.map((icon, index) => (
          <span key={`${index}2`} className="sm:my-[60px] my-[10px] -z-10">
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IconsSlider;
