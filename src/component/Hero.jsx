import React from "react";
import { logo } from "../assets";
// import "../App.css";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className=" object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open("https://github.com/YatharthDixit/AI-Summerizer-React");
          }}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Summize, an Open-Source article summerizer
        the transform lengthy article into clear and concise summary.
      </h2>
    </header>
  );
};

export default Hero;
