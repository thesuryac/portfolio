import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Type = () => {
  return (
    <div className="type sm:h-20 h-auto">
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl font-bebas font-semibold text-blue-200 cursor-default">
        <Typewriter
          words={[
            "Software Developer",
            "Front-end Developer",
            "Backend Developer",
            "Full-stack Developer",
          ]}
          loop={5}
          cursor
          cursorColor="white"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={100}
        />
      </h1>
    </div>
  );
};

export default Type;
