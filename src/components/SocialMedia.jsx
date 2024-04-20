import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  const [footerIconSize, setFooterIconSize] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 425) {
        setFooterIconSize(25);
      } else {
        setFooterIconSize(50);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-full w-full flex sm:flex-col flex-row  justify-around items-center bg-[#ffffff1e] sm:px-5 px-1 rounded-lg">
      <div className="">
        <p
          className={`sm:block hidden text-xl font-montserrat text-white cursor-default`}
        >
          Feel free to connect
        </p>
      </div>
      <a
        href="mailto:thesuryaweb@gmail.com"
        target="_blank"
        className="flex justify-center sm:w-full w-fit items-center bg-[#ffffff29] hover:bg-[#fffefecd] hover:text-black backdrop:blur-3xl sm:text-xl md:text-sm lg:text-xl sm:p-3 p-1 text-white rounded-xl sm:gap-3 gap-1 font-montserrat transition-all "
      >
        <span>
          <MdEmail size={footerIconSize} color="#dda606" />
        </span>{" "}
        <p className={`sm:block hidden `}> thesuryacweb@gmail.com</p>
      </a>
      <a
        href="https://linkedin.com/in/thesuryac"
        target="_blank"
        className="flex justify-center sm:w-full w-fit items-center hover:bg-[#fffefecd] hover:text-black bg-[#ffffff29] backdrop:blur-3xl sm:text-xl md:text-sm lg:text-xl sm:p-3 p-1 text-white rounded-xl sm:gap-3 gap-1 font-montserrat transition-all "
      >
        <span>
          <FaLinkedin size={footerIconSize} color="#0a66c2" />
        </span>
        <p className={`sm:block hidden `}>linkedin.com/in/thesuryac</p>
      </a>
      <a
        href="https://github.com/thesuryac"
        target="_blank"
        className="flex justify-center sm:w-full w-fit items-center hover:bg-[#fffefecd] hover:text-black bg-[#ffffff29] backdrop:blur-3xl sm:text-xl md:text-sm lg:text-xl sm:p-3 p-1 text-white rounded-xl sm:gap-3 gap-1 font-montserrat transition-all "
      >
        <span>
          <FaGithub size={footerIconSize} />
        </span>
        <p className={`sm:block hidden`}> github.com/thesuryac</p>
      </a>
      <a
        href="https://www.instagram.com/thesuryac/"
        target="_blank"
        className="flex justify-center sm:w-full w-fit items-center hover:bg-[#fffefecd] hover:text-black bg-[#ffffff29] backdrop:blur-3xl sm:text-xl md:text-sm lg:text-xl sm:p-3 p-1 text-white rounded-xl sm:gap-3 gap-1 font-montserrat transition-all"
      >
        <span>
          <FaInstagram size={footerIconSize} color="#ff0d5f" />
        </span>
        <p className={`sm:block hidden`}> instagram.com/thesuryac</p>
      </a>
    </div>
  );
};

export default SocialMedia;
