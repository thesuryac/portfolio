import React from "react";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import CallToAction from "./pages/CallToAction";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <main className="h-screen sm:w-[97vw] max-w-[1500px]  mx-auto  snap-y snap-mandatory  overflow-y-auto no-scrollbar transition-all ease-in-out delay-200">
      <Header />

      <div className="snap-center h-screen">
        <Hero />
      </div>
      <div className="snap-center h-screen ">
        <Projects />
      </div>
      <div className="snap-center h-screen ">
        <About />
      </div>
      <div className="snap-center h-screen ">
        <CallToAction />
      </div>
    </main>
  );
};

export default App;
