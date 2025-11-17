import React from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="absolute top-3 right-3 text-2xl text-blue-500 hover:text-blue-600 z-50"
        >
          <IoIosClose></IoIosClose>
        </button>
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-4">
          {" "}
          Your Cart 🛍️
        </h2>
        {
          [1,2,3,4,5,6,7].map(()=>(
             <ul className="divide-y divide-blue-500">
          <li className="flex items-center gap-5 py-4 ">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.nKkm0wnm9J-Ko2rny3mAzAHaIo?pid=Api&P=0&h=180"
              className="w-16 rounded border "
              alt=""
            />
            <div className="flex-1">
              <h3 className="font-semibold text-blue-500">Apple</h3>
            </div>
            <p className="text-green-500 text-xl font-semibold">$55</p>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-blue-400 rounded hover:bg-blue-500">
                <FaPlus className="text-white" />
              </button>
              <span className="px-2 text-xl">0</span>
              <button className="px-2 py-1 bg-blue-400 rounded hover:bg-blue-500">
                <FaMinus className="text-white" />
              </button>
            </div>
            
            <MdDelete className="text-xl text-blue-500 hover:text-blue-600 cursor-pointer" />
          </li>
        </ul>

          ))
        }

        <div className="mt-6 text-right">
          <p className="text-xl text-blue-500 font-bold">Total:- <span className="text-green-500 font-bold">$55</span></p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Checkout</button>
        </div>
       
      </div>
    </div>
  );
};

export default Cart;
