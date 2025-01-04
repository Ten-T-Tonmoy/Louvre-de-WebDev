
import "./index.css";
import React, { useState } from "react";
function App() {
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [mf, setMf] = useState("");
  const [model, setModel] = useState("");

  function addCar() {
    const nCar = {
      cyear: year,
      cmf: mf,
      cmodel: model,
    };
    setCars((c) => [...c, nCar]);
    setYear(new Date().getFullYear());
    setMf("");
    setModel("");
  }
  function removeCar(index) {
    setCars((c) => c.filter((Element, i) => i !== index));
  }
  function manageYear(event) {
    setYear(event.target.value);
  }
  function manageMf(event) {
    setMf(event.target.value);
  }
  function manageModel(event) {
    setModel(event.target.value);
  }
  return (
    <>
      <div
        className="m-[30px]  text-center font-mono
        bg-gradient-to-r from-purple-500 rounded-md py-3
          to-pink-500 text-[30px]"
      >
        {" "}
        <h1>Add Car</h1>
        <div className="flex flex-col items-center">
          <input
            type="number"
            value={year}
            className="outline rounded-md
           outline-black text-center"
            onChange={manageYear}
          />{" "}
          <input
            type="text"
            className="outline rounded-md
         outline-black text-center mt-2"
            value={mf}
            onChange={manageMf}
            placeholder="Manufacturer Name"
          />
          <input
            type="text"
            className="outline rounded-md
         outline-black text-center mt-2"
            value={model}
            onChange={manageModel}
            placeholder="Enter car model"
          />
          <button
            onClick={addCar}
            className="px-6 mt-4 py-2 rounded-md
         text-white font-medium mb-5 shadow-white
         bg-gradient-to-r from-pink-500
          to-purple-500 hover:from-purple-500
           hover:to-pink-500 shadow-sm
           transform hover:scale-105 
           transition-transform duration-300"
          >
            Submit
          </button>
        </div>
        <ol className="cars">
          {cars.map((car, index) => (
            <li key={index} className="mx-4 flex justify-between items-center">
              {index + 1} : {car.cmf} {car.cmodel} {car.cyear}{" "}
              <button
                onClick={() => removeCar(index)}
                className="px-3 mt-4  rounded-md
         text-black font-medium 
         bg-gradient-to-r from-purple-500
          to-pink-500 hover:from-pink-500
           hover:to-purple-500 shadow-sm shadow-white
            
           transition-transform duration-300"
              >
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
