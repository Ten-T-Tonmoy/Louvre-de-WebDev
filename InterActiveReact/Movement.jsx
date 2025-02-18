import React, { useState } from "react";
import "./index.css";
//image slider time
//cant use push on useState
//items center= vertically justify-center=vertically centers
let x = 0;
let y = 0;
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const box = document.getElementById("box");
  if (event.key === "d") {
    y += 15;
  } else if (event.key === "a") {
    y -= 15;
  } else if (event.key === "w") {
    x -= 15;
  } else if (event.key === "s") {
    x += 15;
  }
  box.style.margin = `${x}px ${y}px`;
});
//rendering will make x and y 0 thts why out of export func
export default function App() {
  return (
    <div id="box" className="h-40 bg-green-400 w-40 ">
      <div
        className="text-white font-mono 
      text-[100px] font-bold text-center"
      >
        😐
      </div>
    </div>
  );
}
