import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router";

const AddProducts = () => {
   const navigate = useNavigate()
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Add Products</h1>
        <button onClick={()=>{navigate("/admin/adminproducts")}} className="bg-blue-600 text-xl px-8 py-2 rounded hover:bg-blue-700 text-white">
          Back
        </button>
        <form action="">
            <label htmlFor=""></label>
            <input type="text" />
            
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
