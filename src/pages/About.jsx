import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const iconSize = 50;
  return (
    <section
      id="about"
      className="sm:h-screen h-[90%] w-full flex flex-col justify-around items-center pt-20"
    >
      <h1 className="text-white text-8xl font-montserrat cursor-default">
        About
      </h1>
      <p className="text-blue-500 sm:text-xl md:text-xl lg:text-2xl sm:w-1/2 w-full text-center font-montserrat cursor-default">
        I'm particularly fascinated by the creative freedom offered by React and
        the scalability of Node.js. In my projects, I strive to create intuitive
        UIs and efficient backend functionalities.
      </p>
      <div className="w-full grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3  h-1/3 gap-3">
        <div className="bg-[#1d4fd84a] rounded-lg flex flex-col items-center cursor-default justify-around px-3 mx-auto w-[90%] text-white hover:text-black hover:scale-110 hover:bg-blue-600 border-b-8 border-blue-400 transition-all">
          <h3 className="sm:text-xl md:text-2xl lg:text-4xl font-bold font-montserrat">
            Frontend Developer
          </h3>
          <hr className="border border-blue-900  w-[90%] sm:block hidden" />
          <p className="sm:block hidden sm:text-sm md:text-xl lg:text-2xl font-montserrat">
            I have with experience in building responsive and optimized sites.
          </p>
        </div>
        <div className="bg-[#1d4fd84a] rounded-lg flex flex-col cursor-default items-center justify-around px-3 mx-auto w-[90%] text-white hover:text-black hover:scale-110 hover:bg-blue-600 border-b-8 border-blue-400 transition-all">
          <h3 className="sm:text-xl md:text-2xl lg:text-4xl font-bold font-montserrat">
            Backend Developer
          </h3>
          <hr className="border border-blue-900 w-[90%] sm:block hidden " />
          <p className="sm:block hidden sm:text-sm md:text-xl lg:text-2xl font-montserrat">
            I have with experience in building fast and optimized apis.
          </p>
        </div>
        <div className="bg-[#1d4fd84a] rounded-lg flex flex-col items-center cursor-default justify-around px-3 mx-auto w-[90%] text-white hover:text-black hover:scale-110 hover:bg-blue-600 border-b-8 border-blue-400 transition-all">
          <h3 className="sm:text-xl md:text-2xl lg:text-4xl font-montserrat font-bold">
            FullStack Developer
          </h3>
          <hr className="border border-blue-900 w-[90%] sm:block hidden" />
          <p className="sm:block hidden sm:text-sm md:text-xl lg:text-2xl font-montserrat font-normal">
            I have experience in building robust full app using MERN stack.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center sm:w-full md:w-1/2 lg:1/3 gap-5">
        <a
          href="https://github.com/thesuryac"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-800 hover:bg-blue-600 h-16 sm:w-52 w-24 rounded-lg flex justify-around items-center"
        >
          <p className="sm:block hidden sm:text-2xl text-3xl"> Github</p>
          <FaGithub size={iconSize} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/thesuryac/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#fffefecd] text-black hover:bg-[#ffffff29] backdrop:blur-3xl text-xl p-3 hover:text-white gap-3 font-montserrat transition-all h-16 sm:w-52 w-24 rounded-lg flex justify-around items-center"
        >
          <p className="sm:block hidden sm:text-2xl text-3xl"> Linkedin</p>
          <FaLinkedin size={iconSize} color="#0a66c2" />
        </a>
      </div>
    </section>
  );
};

export default About;
