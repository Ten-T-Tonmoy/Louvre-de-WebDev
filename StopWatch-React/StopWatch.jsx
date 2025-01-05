import React from "react";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [running, setRunning] = useState(false);
  const [elap, setElap] = useState(0);
  const intervalRef = useRef(null);
  const start = useRef(0);

  useEffect(() => {
    if (running) {
      //id ref to clear interval later
      intervalRef.current = setInterval(() => {
        setElap(Date.now() - start.current);
      }, 10);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  function run() {
    setRunning(true);
    start.current = Date.now() - elap;
  }
  function stop() {
    setRunning(false);
  }
  function reset() {
    setElap(0);
    setRunning(false);
  }
  function formatTime() {
    let hour = Math.floor(elap / (1000 * 60 * 60));
    let min = Math.floor((elap - hour * 60 * 60 * 1000) / (1000 * 60));
    let sec = Math.floor(
      (elap - hour * 60 * 60 * 1000 - min * 60 * 1000) / 1000
    );
    let mili = Math.floor(
      (elap - hour * 60 * 60 * 1000 - min * 60 * 1000 - sec * 1000) / 10
    );

    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    mili = String(mili).padStart(2, "0");

    return `${min} : ${sec} : ${mili}`;
  }

  return (
    <>
      <div className="box   border border-1 border-black bg-gradient-to-r from-blue-600 text-center m-20  rounded-md to-white">
        <h1 className=" font-mono m-5 text-[30px] font-bold">Stop Watch FR</h1>
        <h1 className="text-black font-mono  text-[60px]">{formatTime()}</h1>
        <button
          onClick={stop}
          className="p-2 w-16 rounded-md text-white font-mono bg-red-400 hover:bg-red-500 m-2"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="p-2 w-16 text-white font-mono rounded-md bg-yellow-400 hover:bg-yellow-500 m-2"
        >
          Reset
        </button>
        <button
          onClick={run}
          className="p-2 w-16 hover:bg-green-500 text-white font-mono rounded-md bg-green-400 m-2"
        >
          Run
        </button>
      </div>
    </>
  );
};

export default App;
