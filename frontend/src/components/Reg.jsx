import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
const Reg = () => {
     const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState(true);
  const [form,setForm] =  useState({fullname:"",email:"",pass:""})

 async function handleform(e) {
    e.preventDefault();
    try {
    const response =  await fetch('/api/regdata',{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(form)
      })
    } catch (error) {
      
    }
  }
  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value})
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
          Create your account ...
        </h2>
        
        <form action="" onSubmit={handleform}>
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Enter full name"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
            Email
          </label>
          <input
            type="text"
            className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Enter email "
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Enter password"
              type={showpassword ? "password" : "text"}
              name="pass"
              value={form.pass}
              onChange={handleChange}
            />
            <button
              onClick={() => {
                setShowPassword(!showpassword);
              }}
              className="absolute right-4 top-3"
            >
              {showpassword ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button className="w-full px-6 text-white py-2 text-xl bg-blue-500 rounded mt-6 hover:bg-blue-600">
           Register
          </button>
        </form>
        <p className="text-center mt-2">
          Don't have an account
          <Link to={"/login"} className="text-green-600 hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Reg
