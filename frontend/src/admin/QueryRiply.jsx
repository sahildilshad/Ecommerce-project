import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router";

const QueryRiply = () => {
  const navigate =   useNavigate()
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Riply Query</h1>
         <button
          onClick={() => {
            navigate("/admin/adminquery");
          }}
          className="bg-blue-600 text-xl px-8 py-2 rounded mb-6 hover:bg-blue-700 text-white"
        >
          Back
        </button>
        <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6">
          <form action="">
            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              To
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded"
              type="text"
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              From
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded"
              type="text"
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              Subject
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded"
              type="text"
              name=""
              id=""
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              Body
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-700 rounded"
              name=""
              id=""
            ></textarea>
            <div className="text-right mt-1">
              <button className="bg-blue-500 rounded px-6 py-2 text-white hover:bg-blue-600">
                Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryRiply;
