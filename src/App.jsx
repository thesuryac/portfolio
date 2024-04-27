import React from "react";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import CallToAction from "./pages/CallToAction";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="">
      <main className="h-screen sm:w-[97vw] max-w-[1500px] mx-auto snap-y snap-mandatory">
        <div className=" snap-start">
          <Header />
        </div>
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <About />
        </div>
        <div className="snap-start">
          <CallToAction />
        </div>
      </main>
    </div>
  );
};

export default App;
