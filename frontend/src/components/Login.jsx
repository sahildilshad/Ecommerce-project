import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [showpassword, setShowPassword] = useState(true);
  const [login, setLogin] = useState({ loginEmail: "", loginPass: "" });
  async function handleform(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/loginuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/")
      }else{
        toast.error(result.message);

      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-full max-w-md py-6 px-4 rounded relative ">
        <button
          className="absolute top-2 right-2 text-2xl text-blue-500 hover:text-blue-700"
          onClick={() => {
            navigate("/");
          }}
        >
          <IoIosClose />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-500 text-center">
          Login to Continue...
        </h2>
        <form action="" onSubmit={handleform}>
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
            Email
          </label>
          <input
            type="text"
            className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            placeholder="Enter email"
            name="loginEmail"
            value={login.loginEmail}
            onChange={handleChange}
          />
          <label className="block  mb-2 text-sm font-semibold" htmlFor="">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full border border-blue-500 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Enter password"
              name="loginPass"
              value={login.loginPass}
              type={showpassword ? "password" : "text"}
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
            Login
          </button>
        </form>
        <p className="text-center mt-2">
          Don't have an account
          <Link to={"/reg"} className="text-green-600 hover:underline">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
