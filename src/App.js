import { Time } from "./Time";
import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [bgColor, setBgColor] = useState("gray-100");

  const handleButtonWork = () => {
    setTime(25);
    document.body.classList.remove("bg-[#acc9cf]", "bg-[#7fbf7f]");
    document.body.classList.add(
      "bg-[#eca3a3]",
      "transition-all",
      "duration-500"
    );
    setBgColor("red");
  };
  const handleButtonShortRest = () => {
    setTime(5);
    document.body.classList.remove("bg-[#eca3a3]", "bg-[#7fbf7f]");
    document.body.classList.add(
      "bg-[#acc9cf]",
      "transition-all",
      "duration-500"
    );
    setBgColor("blue");
  };

  const handleButtonLongRest = () => {
    setTime(15);
    document.body.classList.remove("bg-[#acc9cf]", "bg-[#eca3a3]");
    document.body.classList.add(
      "bg-[#7fbf7f]",
      "transition-all",
      "duration-500"
    );
    setBgColor("green");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div
          className={`rounded-lg py-24 px-4 ${
            bgColor === "gray-100"
              ? "bg-[#ddd]"
              : bgColor === "red"
              ? "bg-[#e68484]"
              : bgColor === "blue"
              ? "bg-[#91b7bf]"
              : "bg-[#4ca64c]"
          }`}
        >
          {/* //#e68484 #91b7bf #4ca64c */}
          <div className="flex">
            <button
              type="button"
              className="px-8 py-2 bg-[#cccccc] text-[#222] rounded-3xl text-xl mr-4 hover:bg-[#666666] hover:text-[#ddd] "
              onClick={handleButtonWork}
            >
              Work
            </button>
            <button
              type="button"
              className="px-8 py-2 bg-[#cccccc] text-[#222] rounded-3xl text-xl mr-4 hover:bg-[#666666] hover:text-[#ddd]"
              onClick={handleButtonShortRest}
            >
              Short Rest
            </button>
            <button
              type="button"
              className="px-8 py-2 bg-[#cccccc] text-[#222] rounded-3xl text-xl hover:bg-[#666666] hover:text-[#ddd]"
              onClick={handleButtonLongRest}
            >
              Long Rest
            </button>
          </div>
          <div className="mt-32 flex flex-col items-center">
            {<Time work={time} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
