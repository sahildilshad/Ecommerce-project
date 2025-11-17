import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router";

const AddProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Add Products</h1>
        <button
          onClick={() => {
            navigate("/admin/adminproducts");
          }}
          className="bg-blue-600 text-xl px-8 py-2 rounded hover:bg-blue-700 text-white"
        >
          Back
        </button>
        <form
          action=""
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6 mt-4"
        >
          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Product Name
          </label>

          <input
            className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2"
            type="text"
          />
          <label  className="block text-gray-700 font-medium mb-1"  htmlFor="">Price </label>
          <input className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2" type="number" name="" id="" />
          <label  className="block text-gray-700 font-medium mb-1"  htmlFor="">Category</label>
          <select name="" id="" className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2">
            <option value="">Cafe</option>
            <option value="">Home</option>
            <option value="">Toys</option>
            <option value="">Fresh</option>
            <option value="">Electronis</option>
            <option value="">Beauty</option>
           
          </select>
          <label  className="block text-gray-700 font-medium mb-1"  htmlFor="">Product Image</label>
          <input className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2" type="file" />
          <div className="text-right">
 <button className="bg-blue-600 text-white px-6 py-2 rounded  hover:bg-blue-700">Add Product</button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
