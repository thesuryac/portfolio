const Footer = () => {
  return (
    <footer className=" h-[20%] w-full flex flex-col justify-around items-center">
      <small className="text-white text-lg cursor-default">
        &copy; 2024 Surya. All rights reserved
      </small>
      <p className="sm:text-2xl text-sm font-montserrat font-normal text-white sm:w-[70%] w-[90%] text-center cursor-default">
        <span className="font-bold">About this website : </span>
        built with React, TailwindCss, Framer Motion, EmailJs, Render hosting.
      </p>
    </footer>
  );
};

export default Footer;
