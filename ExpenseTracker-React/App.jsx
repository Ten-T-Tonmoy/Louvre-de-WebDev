import React from "react";
import Menu from "./menu.jsx";
import ButtonRed from "./buttonRed.jsx";
import ExpTable from "./expTable.jsx";
import { useForm } from "react-hook-form";
import { useState } from "react";

const App = () => {
  const [expenses, setExp] = useState([
    {
      id: 1,
      name: "Crackers",
      amount: 50,  
      quantity: 1,
      category: "Food",
    },
    {
      id: 2,
      name: "Music CD",
      amount: 100, 
      quantity: 1,
      category: "Entertainment",
    },
    {
      id: 3,
      name: "Books",
      amount: 30,  
      quantity: 3,
      category: "Study",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All"); // Single state for category

  const visible =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((e) => e.category === selectedCategory);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const onSubmit = (data) => {
    const newExp = {
      id: expenses.length + 1,
      name: data.name,
      amount: Number(data.price), 
      quantity: Number(data.Quantity),
      category: selectedCategory === "All" ? "Food" : selectedCategory, // Default to Food if All is selected
    };
    setExp([...expenses, newExp]);
  };

  return (
    <div className="flex flex-col items-center">
      <div className=" bg-blue-600 w-[95%] mx-3 my-3 rounded-sm">
        <h1 className="text-center font-bold text-white mt-8 mb-2 font-mono text-[45px]">
          Expense Tracker
        </h1>{" "}
        <hr className="w-full mx-auto block mb-8" />
        <form
          className="font-mono text-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-white">Label :</label>
          <input
            {...register("name", { required: true, minLength: 5 })}
            placeholder="Name"
            className=" m-2 rounded-sm p-1"
          />{" "}
          <br />
          {isSubmitted && errors.name?.type === "required" && (
            <p className="text-[15px] font-bold text-red-500">
              This field is required
            </p>
          )}
          {isSubmitted && errors.name?.type === "minLength" && (
            <p className="text-[15px] font-bold text-red-500">
              Atleast 5 characters!!
            </p>
          )}
          <label className="text-white">Quant :</label>
          <input
            {...register("Quantity", {
              required: true,
              maxLength: 2,
            })}
            placeholder="Quantity"
            className=" m-2 rounded-sm p-1"
          />{" "}
          <br />
          {isSubmitted && errors.Quantity?.type === "required" && (
            <p className="text-[15px] font-bold text-red-500">
              Quantity is required
            </p>
          )}
          {isSubmitted && errors.Quantity?.type === "maxLength" && (
            <p className="text-[15px] font-bold text-red-500">
              Atmost 2 characters!!
            </p>
          )}
          <label className="text-white">Price :</label>
          <input
            {...register("price", {
              required: true,
              minLength: 2,
            })}
            placeholder="Price"
            className=" m-2 rounded-sm p-1"
          />{" "}
          <br />
          {isSubmitted && errors.price?.type === "required" && (
            <p className="text-[15px] font-bold text-red-500">
              Price is required
            </p>
          )}
          {isSubmitted && errors.price?.type === "minLength" && (
            <p className="text-[15px] font-bold text-red-500">
              Atleast 2 characters!!
            </p>
          )}
          <br />
          <div>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className=" rounded-sm  mb-2 w-52 h-8 p-1"
            >
              <option value="All">All Categories</option>
              <option value="Food">Food</option>
              <option value="Groceries">Groceries</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Study">Study Materials</option>
            </select>
          </div>
          <div>
            <button
              type="submit" 
              className="bg-red-400 rounded-sm p-1 text-white m-2"
            >
              Submit
            </button>
          </div>
          <br />
        </form>
      </div>
      <div className="bg-blue-100 w-[95%] text-center items-center mx-3 my-3 rounded-sm">
        <ExpTable
          expenses={visible}
          deleteExp={(id) => setExp(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
};

export default App;
