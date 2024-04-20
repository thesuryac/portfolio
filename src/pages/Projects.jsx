import React, { useEffect, useState } from "react";
import blog from "../assets/blog.png";
import chat from "../assets/chat.png";
import Project from "../components/Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [active, setActive] = useState(0);
  // useEffect(() => {
  //   setActive(active);
  // }, [active]);
  const projects = [
    {
      name: "Blog Application",
      gitHub: "https://github.com/thesuryac/blogs",
      liveLink: "https://mern-blog-s4gq.onrender.com",
      img: blog,
    },
    {
      name: "Chat App",
      gitHub: "https://github.com/thesuryac/chatapp",
      liveLink: "https://chatapp-2-hrnk.onrender.com",
      img: chat,
    },
  ];
  const handleBack = () => {
    if (active === 0) setActive(projects.length - 1);
    else setActive(active - 1);
  };
  const handleFront = () => {
    if (active === projects.length - 1) setActive(0);
    else setActive(active + 1);
  };
  return (
    <section
      id="projects"
      className="h-screen w-full flex flex-col overflow-hidden"
    >
      {/* {projects.map((project, index) => (
        <Project key={index} />
      ))} */}
      <div className="h-[10%] w-full"></div>
      <div className="h-[10%] w-full">
        <h1 className="text-5xl font-montserrat font-bold text-center text-white">
          Projects
        </h1>
      </div>
      <div className="h-[70%] w-full flex justify-center items-center ease-in-out transition-all delay-200 ">
        <button
          onClick={() => handleBack()}
          className="hover:text-cyan-300 text-blue-500 hover:scale-125 transition-all sm:block hidden"
        >
          <IoIosArrowBack size={100} />
        </button>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              name={project.name}
              gitHub={project.gitHub}
              liveLink={project.liveLink}
              img={project.img}
              index={index}
              active={active}
            />
          );
        })}
        <button
          onClick={() => handleFront()}
          className="hover:text-cyan-300 text-blue-500 hover:scale-125 transition-all sm:block hidden"
        >
          <IoIosArrowForward size={100} />
        </button>
      </div>
      <div className="h-[10%] w-full flex justify-center items-center gap-10">
        {projects.map((project, index) => {
          return (
            <button
              onClick={() => setActive(index)}
              key={index}
              className={`h-5 w-5 rounded-full bg-blue-800 hover:scale-125 ${
                active === index ? "scale-125 bg-cyan-300" : ""
              }`}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
