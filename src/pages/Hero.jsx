import React, { useEffect, useState } from "react";
import IconsSlider from "../components/IconLoader";
import Type from "../components/Type";
import surya from "../assets/surya_Resume.pdf";
import { FaGitAlt, FaJava } from "react-icons/fa6";
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

import {
  SiExpress,
  SiJupyter,
  SiRedux,
  SiTypescript,
  SiPandas,
  SiTensorflow,
  SiNumpy,
  SiKeras,
  SiScikitlearn,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

import { BiLogoTailwindCss } from "react-icons/bi";

import { TbBrandVscode, TbBrandCpp } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
const Hero = () => {
  const [iconSize, setIconSize] = useState(100); // Initial size for larger screens

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 450) {
        setIconSize(50);
      } else {
        setIconSize(100); // Reset to default for larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const list = [
    <FaHtml5 size={iconSize} color="#e34f26" />,
    <FaCss3 size={iconSize} color="#2965f1" />,
    <BiLogoTailwindCss size={iconSize} color="#38bdf8" />,
    <IoLogoJavascript size={iconSize} color="#F0DB4F" />,
    <SiTypescript size={iconSize} color="#3178c6" />,
    <FaReact size={iconSize} color="#61dafb" />,
    <FaNodeJs size={iconSize} color="#68A063" />,
    <SiExpress size={iconSize} color="#ffffff" />,
    <SiRedux size={iconSize} color="#764abc" />,
    <SiMongodb size={iconSize} color="#00ed64" />,
    <FaHtml5 size={iconSize} color="#e34f26" />,
    <FaCss3 size={iconSize} color="#2965f1" />,
    <BiLogoTailwindCss size={iconSize} color="#38bdf8" />,
    <IoLogoJavascript size={iconSize} color="#F0DB4F" />,
    <SiTypescript size={iconSize} color="#3178c6" />,
    <FaReact size={iconSize} color="#61dafb" />,
    <FaNodeJs size={iconSize} color="#68A063" />,
    <SiExpress size={iconSize} color="#ffffff" />,
    <SiRedux size={iconSize} color="#764abc" />,
    <SiMongodb size={iconSize} color="#00ed64" />,
  ];

  const list2 = [
    <FaPython size={iconSize} color="#ffde57" />,

    <SiPandas size={iconSize} color="#ffffff" />,

    <SiTensorflow size={iconSize} color="#ff8700" />,

    <SiNumpy size={iconSize} color="#688cd6" />,

    <SiKeras size={iconSize} color="#d00000" />,

    <SiScikitlearn size={iconSize} color="#f89939" />,
    <SiJupyter size={iconSize} color="#f37726" />,
    <FaPython size={iconSize} color="#ffde57" />,

    <SiPandas size={iconSize} color="#ffffff" />,

    <SiTensorflow size={iconSize} color="#ff8700" />,

    <SiNumpy size={iconSize} color="#688cd6" />,

    <SiKeras size={iconSize} color="#d00000" />,

    <SiScikitlearn size={iconSize} color="#f89939" />,
    <SiJupyter size={iconSize} color="#f37726" />,
  ];

  const list3 = [
    <FaGithub size={iconSize} color="white" />,
    <TbBrandVscode size={iconSize} color="#23a6f2" />,
    <FaGitAlt size={iconSize} color="#f15233" />,
    <FaJava size={iconSize} color="#196d80" />,
    <TbBrandCpp size={iconSize} color="#0648b2" />,
    <SiPostman size={iconSize} color="fe6c37" />,
    <FaGithub size={iconSize} color="white" />,
    <TbBrandVscode size={iconSize} color="#23a6f2" />,
    <FaGitAlt size={iconSize} color="#f15233" />,
    <FaJava size={iconSize} color="#196d80" />,
    <TbBrandCpp size={iconSize} color="#0648b2" />,
    <SiPostman size={iconSize} color="fe6c37" />,
  ];
  return (
    <section id="hero" className="h-[95%] w-full pt-12 my-auto">
      <div className="grid sm:grid-cols-5 h-5/6 sm:grid-rows-3 grid-rows-3 w-full ">
        <div className=" sm:col-span-3 h-full w-full sm:row-span-3 row-span-2 flex flex-col justify-evenly items-center ">
          <hr className="border-b border-blue-600 w-full" />
          <hr className="border-b border-blue-700 w-full" />
          <hr className="border-b border-blue-800 w-full" />
          <hr className="border-b border-blue-900 w-full" />
          <hr className="border-b border-blue-950 w-full" />
          <div className="h-[50%] sm:w-[80%] flex flex-col justify-between items-start">
            <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bebas font-semibold text-blue-100 cursor-default">
              Welcome
            </h2>
            <h1 className="md:text-7xl sm:text-5xl lg:text-8xl text-6xl font-montserrat font-bold text-blue-100 cursor-default">
              I'm <span className="text-blue-600">Surya</span>
            </h1>
            <Type />
          </div>
          <hr className="border-b border-blue-950 w-full" />
          <hr className="border-b border-blue-900 w-full" />
          <hr className="border-b border-blue-800 w-full" />
          <hr className="border-b border-blue-700 w-full" />
          <hr className="border-b border-blue-600 w-full" />
        </div>
        <div className=" sm:col-span-2 row-span-1 sm:h-full h-auto">
          <div className="grid  grid-cols-3 h-full">
            <div className="h-5/6 my-auto">
              <div className="sm:h-[70vh] h-[20vh]">
                <IconsSlider list={list} />
              </div>
            </div>
            <div className="h-5/6  my-auto">
              <div className="sm:h-[70vh] h-[20vh]">
                <IconsSlider reverse={true} list={list2} />
              </div>
            </div>
            <div className="h-5/6  my-auto">
              <div className="sm:h-[70vh] h-[20vh]">
                <IconsSlider list={list3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-1/6 bg-inherit backdrop:blur-md">
        <div className="h-full w-full flex flex-col justify-center items-center gap-3">
          <a
            href={surya}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0011ffcd] text-white hover:bg-[#2428ff8e] backdrop:blur-3xl text-xl p-2 hover:text-white  font-montserrat transition-all h-16 sm:w-[40%] w-[80%] rounded-lg flex justify-around items-center"
          >
            <p className="sm:text-2xl text-sm"> Download Resume</p>
          </a>
          <IoIosArrowDown size={35} color="grey" className=" animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
