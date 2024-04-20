import React from "react";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import CallToAction from "./pages/CallToAction";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="">
      <main className="h-auto sm:w-[97vw] max-w-[1500px] mx-auto">
        <Header />
        <Hero />
        <Projects />
        <About />
        <CallToAction />
      </main>
    </div>
  );
};

export default App;
