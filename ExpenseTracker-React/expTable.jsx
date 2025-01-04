import React from "react";
import Menu from "./menu.jsx";

const ExpTable = ({ expenses, deleteExp }) => {
  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount * expense.quantity,
    0
  );
  return (
    <div className="mx-auto  mt-4">
      <Menu />
      <table className="table-auto border-collapse border mx-auto mb-5 border-blue-500 mt-4 ">
        <thead className="bg-blue-100 text-blue-700">
          <tr>
            <th className="px-4 py-2 border border-blue-300">Name</th>
            <th className="px-4 py-2 border border-blue-300">Amount</th>
            <th className="px-4 py-2 border border-blue-300">Quantity</th>
            <th className="px-4 py-2 border border-blue-300">Category</th>
            <th className="px-4 py-2 border border-blue-300">Remove</th>
          </tr>
        </thead>
        <tbody className="bg-white text-blue-600">
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-blue-50">
              <td className="px-4 py-2 border border-blue-300">
                {expense.name}
              </td>
              <td className="px-4 py-2 border border-blue-300">
                ${expense.amount.toFixed(2)}
              </td>
              <td className="px-4 py-2 border border-blue-300">
                {expense.quantity}
              </td>
              <td className="px-4 py-2 border border-blue-300">
                {expense.category}
              </td>
              <td className="px-4 py-2 border border-blue-300 text-blue-500 hover:text-blue-700 cursor-pointer">
                <button
                  onClick={() => deleteExp(expense.id)}
                  className="border border-red-500 px-2 py-1 hover:bg-red-500 hover:text-white rounded-md text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-blue-100">
          <tr>
            <td
              className="px-4 py-2 border border-blue-300 text-blue-700"
              colSpan="4"
            >
              Total Amount
            </td>
            <td className="px-4 py-2 border border-blue-300 text-blue-700">
              ${total.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpTable;
