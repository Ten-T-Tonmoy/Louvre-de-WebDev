
import React, { useState } from "react";
import "./index.css";
// to do list/making list or file
//this shit is so ass
//cant use push on useState
//unfinised css needs fix also up and down logic
export default function App() {
  const [tasks, set] = useState(["Complete Hooks", "Finish Chores"]);
  const [newtask, setnew] = useState("");
  function makechange(event) {
    setnew(event.target.value);
  }
  function addtask(newtask) {
    if (newtask.trim() !== "") {
      set([...tasks, newtask]);
      setnew("");
    }
  }
  function remove(index) {
    const after = tasks.filter((task, i) => i !== index);
    set(after);
  }
  function goUp(index) {
    if (index > 0) {
      const upd = [...tasks];
      [upd[index - 1], upd[index]] = [upd[index], upd[index - 1]];
      set(upd);
    }
  }
  function goDown(index) {
    if (index < tasks.length - 1) {
      const downd = [...tasks];
      [downd[index + 1], downd[index]] = [downd[index], downd[index + 1]];
      set(downd);
    }
  }

  return (
    <>
      <div
        className="bg-gradient-to-r  from-red-600 via-yellow-600 
         to-pink-600  h-[200px]
      text-white font-mono 
      text-center "
      >
        <h1 className="text-[50px]">Task Manager</h1>
        <div className="flex flex-row justify-center mt-4">
          <input
            value={newtask}
            onChange={makechange}
            type="text"
            className="w-[350px] h-[50px] text-cyan-600
              text-[20px] font-mono p-4 
              "
          />
          <button
            onClick={() => addtask(newtask)}
            className="bg-blue-500 h-[50px]
          text-[30px] px-5
          hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
      <ul className="cars text-white font-mono m-1 ">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex  p-2 rounded-lg my-2 bg-gradient-to-r  from-yellow-600 via-pink-600 
         to-red-600
             justify-between items-center"
          >
            {task}
            <span>
              <button
                onClick={() => remove(index)}
                className="bg-red-500 rounded-md h-[40px]
          text-[30px] px-4
          hover:bg-red-600"
              >
                x
              </button>
              <button
                onClick={() => goDown(index)}
                className="bg-yellow-500 rounded-md h-[40px]
          text-[30px] px-2 text-center
          hover:bg-yellow-600"
              >
                --
              </button>
              <button
                onClick={() => goUp(index)}
                className="bg-green-500 rounded-md h-[40px]
          text-[30px] px-2 
          hover:bg-green-600"
              >
                ++
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
