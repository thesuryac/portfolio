import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { FaXmark } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className="h-20 w-screen fixed top-0 backdrop-blur-lg z-50">
      <nav className="flex max-w-[1500px] justify-center items-center mx-auto ">
        <Link
          to={"#hero"}
          className="sm:h-12 sm:w-12 w-8 h-6 mx-auto  flex flex-col justify-center items-center sm:p-0 p-10  sm:top-[10px] top-[-50px]  sm:left-10 md:left-4 left-[12px] absolute cursor-pointer"
        >
          <h1 className=" sm:text-xl text-lg text-slate-900 bg-blue-700  logo sm:p-2 p-1 rounded-full pt-24 ">
            CS
          </h1>
          <p className=" sm:text-sm text-xs text-blue-400">surya</p>
        </Link>
        <div className="flex justify-around max-sm:hidden text-white w-[70%] pt-6">
          <Link
            to={"#hero"}
            className="px-5 cursor-pointer sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-white transition-all"
          >
            Home
          </Link>
          <Link
            to={"#projects"}
            className="px-5 cursor-pointer sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-white transition-all"
          >
            Projects
          </Link>
          <Link
            to={"#about"}
            className="px-5 cursor-pointer sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-white transition-all"
          >
            about
          </Link>
          <Link
            to={"#contact"}
            className="px-5 cursor-pointer sm:text-sm md:text-lg lg:text-xl text-gray-300 hover:text-white transition-all"
          >
            contact
          </Link>
        </div>
        <div
          className={`absolute sm:hidden top-[20px] right-10 cursor-pointer flex justify-center items-center z-30 transition duration-700 ${
            burger ? "ease-out" : "ease-in"
          }`}
          onClick={() => {
            setBurger(!burger);
          }}
        >
          {!burger ? (
            <RxHamburgerMenu size={30} color="rgb(135,135,135)" />
          ) : (
            <FaXmark size={30} color="rgba(125,125,125)" />
          )}
        </div>
      </nav>
      <div className="z-10 ">
        {burger && (
          <div className="bg-[#01013eec] backdrop-blur-2xl h-[99vh] w-[99vw] z-20 absolute top-[1px] left-[1px] overflow-hidden rounded-lg  flex flex-col justify-around items-center transition-all delay-700 ease-out">
            <Link
              onClick={() => setBurger(!burger)}
              to={"#hero"}
              className="px-5  cursor-pointer w-1/2 h-1/4 text-lg text-gray-300 hover:text-white transition-all font-bebas font-bold border-b border-gray-700 flex justify-center items-center"
            >
              HOME
            </Link>
            <Link
              onClick={() => setBurger(!burger)}
              to={"#projects"}
              className="px-5 cursor-pointer w-1/2 h-1/4 text-lg text-gray-300 hover:text-white transition-all font-bebas font-bold border-b border-gray-700 flex justify-center items-center"
            >
              PROJECTS
            </Link>
            <Link
              onClick={() => setBurger(!burger)}
              to={"#about"}
              className="px-5 cursor-pointer w-1/2 h-1/4 text-lg text-gray-300 hover:text-white transition-all font-bebas font-bold border-b border-gray-700 flex justify-center items-center"
            >
              ABOUT
            </Link>
            <Link
              onClick={() => setBurger(!burger)}
              to={"#contact"}
              className="px-5 cursor-pointer text-lg h-1/4 w-1/2 text-gray-300 hover:text-white transition-all font-bebas font-bold border-b border-gray-700 flex justify-center items-center"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
