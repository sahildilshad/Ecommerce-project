import React from "react";
import Category from "../pages/Category";

const Product = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <Category />
      <h2 className="text-center text-2xl font-semibold mb-6 mt-2 text-blue-600">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {arr.map(() => (
          <div className="bg-gradient-to-r from from-blue-100 via-white to-white shadow-lg rounded-lg p-3 hover:shadow-xl transition">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.kori7Y8NQzmHi4RLlD-T9AHaE5?pid=Api&P=0&h=180"
              alt="" className="w-full  rounded mb-1"
            />
            <h3>Apple</h3>
            <p className="mt-1 font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
              magni.
            </p>
            <p className="text-green-500 font-bold">$56</p>
            <button className="bg-blue-500 px-2 py-2 rounded-md text-white mt-2 hover:bg-blue-600">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
