import React, { useRef, useState } from "react";
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";

import Emailjs from "@emailjs/browser";

const CallToAction = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    setStatus("loading");
    Emailjs.sendForm("service_10bssoc", "template_zdebofq", form.current, {
      publicKey: "Q6DogVq0V5k93Lvle",
    }).then(
      (result) => {
        setStatus("Thanks for reviewing!");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section
      id="contact"
      className="h-screen w-full sm:pt-10 pt-24 mt-10 flex flex-col justify-center items-center gap-3"
    >
      <h1 className="sm:text-8xl md:text-6xl text-4xl font-montserrat font-bold text-white cursor-default">
        Contact Me
      </h1>
      <div className="h-[60%] w-full backdrop:blur-2xl flex sm:flex-row flex-col justify-center items-center gap-5">
        <div className="sm:w-[60%] sm:h-full w-[90%] h-[80%]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" h-full w-full flex  flex-col justify-around items-center sm:gap-10 md:gap-3"
          >
            <input
              name="user_name"
              type="text"
              className="sm:h-20 h-12 w-full font-montserrat text-xl text-white sm:p-4 p-1  outline-blue-800 bg-[#ffffff38] rounded-lg"
              placeholder="Name"
            />
            <input
              name="user_email"
              type="email"
              className="sm:h-20 h-12 w-full font-montserrat text-xl text-white sm:p-4 p-1 outline-blue-800 bg-[#ffffff38] rounded-lg"
              placeholder="Email"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="7"
              className="sm:h-auto h-32 w-full font-montserrat text-xl text-white sm:p-4 p-1 outline-blue-800 sm:leading-10 bg-[#ffffff38] rounded-lg"
              placeholder="Put down your thoughts here"
            ></textarea>

            <input
              type="submit"
              value="Send"
              className=" sm:h-20 h-12 w-full bg-blue-800 text-white sm:text-xl cursor-pointer md:text-2xl lg:text-3xl rounded-lg font-montserrat flex justify-center items-center gap-6"
            />
            <div className="h-12 w-full flex items-center justify-center  pt-1">
              {status == "" && status !== "loading" && (
                <p className="text-white sm:text-xl h-12 w-full bg-[#ffffff38] text-center align-middle  pt-3 font-montserrat font-semibold border-blue-500 border-b-4 rounded-lg">
                  leave the comments above
                </p>
              )}
              {status === "loading" && (
                <p className="text-white sm:text-xl h-12 w-full  bg-[#ffffff38] text-center align-middle  pt-3 font-montserrat font-semibold border-b-4 border-yellow-500 rounded-lg">
                  sending mail...
                </p>
              )}
              {status != "" && status !== "loading" && (
                <p
                  className={`text-white sm:text-xl h-12  w-full bg-[#ffffff38] text-center align-middle  pt-3 rounded-lg border-b-4 font-montserrat font-semibold ${
                    status === "Thanks for reviewing!"
                      ? "border-green-600"
                      : "border-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className=" sm:w-[40%] sm:h-full h-[20%] w-[90%] ">
          <SocialMedia />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default CallToAction;
