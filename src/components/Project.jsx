import React from "react";

const Project = ({ img, name, gitHub, liveLink, active, index }) => {
  return (
    <div
      className={`sm:h-[90%] sm:w-[90%] w-[95%] h-[80%] bg-[#0011ff4f] mx-auto rounded-lg backdrop:blur-3xl ${
        active === index ? "block" : "hidden"
      } `}
    >
      <div className="h-[80%] w-full flex flex-col justify-around items-center">
        <h3 className="sm:text-4xl text-2xl text-center text-white font-montserrat">
          {name}
        </h3>
        <img
          src={img}
          alt=""
          className="h-[80%] w-[80%] object-cover mx-auto rounded-lg"
        />
      </div>
      <div className="h-[20%] w-full flex justify-around items-center">
        <a
          href={gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fffefecd] text-black hover:bg-[#ffffff29] backdrop:blur-3xl font-semibold sm:text-xl text-sm sm:p-3 p-1 hover:text-white gap-3 font-montserrat transition-all sm:h-16 h-10 sm:w-52 w-24 rounded-lg flex justify-around items-center"
        >
          Code Link
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fffefecd] text-black hover:bg-[#ffffff29] backdrop:blur-3xl font-semibold sm:text-xl text-sm sm:p-3 p-1 hover:text-white gap-3 font-montserrat transition-all sm:h-16 h-10 sm:w-52 w-24 rounded-lg flex justify-around items-center"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default Project;
