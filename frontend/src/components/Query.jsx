import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
const Query = () => {
     const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState(true);
  function handleform(e) {
    e.preventDefault();
  }
  return (
    <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-45'>
      <div className='bg-white w-full max-w-md rounded py-6 px-4 relative'>
          <button
          className="absolute top-3 right-2 font-bold text-2xl text-blue-500 hover:text-blue-700"
          onClick={() => {
            navigate("/");
          }}>
          <IoIosClose />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-500 text-center">
       Query Form
        </h2>
        
        <form action="" onSubmit={handleform}>
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
          Your  Name
          </label>
          <input
            type="text"
            className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Enter full name"
          />
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
           Your Email
          </label>
          <input
            type="text"
            className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Enter email "
          />
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
            Your Query
          </label>
          <div className="relative">
            <textarea
              className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Enter your query here... "
              type={showpassword ? "password" : "text"}
            />
           
          </div>

          <button className="w-full px-6 text-white py-2 text-xl bg-blue-500 rounded mt-6 hover:bg-blue-600">
           Submit Query
          </button>
        </form>
      </div>
    </div>
  )
}

export default Query
