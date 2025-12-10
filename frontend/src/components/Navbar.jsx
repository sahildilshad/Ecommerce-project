import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCartPlus,
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import SearchData from "./SearchData";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  console.log(showSearch);

  return (
    <nav className="bg-gradient-to-r from from-blue-200 via-pink to-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <h5 className="text-blue-500 text-xl font-bold font w-auto cursor-pointer">
            SHOPORA
          </h5>

          {/* search baar */}
          <div className="flex-1 mx-4">
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="w-full bg-gray-100 rounded pl-4 pr-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search for fruits and more "
                onFocus={() => {
                  setShowSearch(true);
                }}
                readOnly
              />
              <FaSearch className="absolute right-4 top-3 text-blue-500 cursor-pointer" />
            </div>
          </div>
          {/* {menu} */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to={"/"}
              className="text-gray-600 text-2xl hover:text-blue-500"
            >
              <FaHome />
            </Link>
            <Link
              to={"/cart"}
              className="text-gray-600 text-2xl hover:text-blue-500"
            >
              <FaCartPlus />
            </Link>
            <Link
              to={"/query"}
              className="text-gray-600 text-2xl hover:text-blue-500"
            >
              <MdOutlineMessage />
            </Link>
            <Link
              to={"/login"}
              className="text-gray-600 text-2xl hover:text-blue-500"
            >
              <FaUser />
            </Link>
          </div>
          {/* {toogle} */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsOpen(!isopen);
              }}
              className="text-2xl hover:text-blue-500"
            >
              {isopen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* {mobile view} */}
          {isopen && (
            <div className="md:hidden bg-white px-8 pt-2 pb-4 space-y-2 shadow-2xl absolute right-0 top-14 mr-4">
              <Link to={"/"} className="block hover:text-blue-400">
                Home
              </Link>
              <Link to={"/cart"} className="block hover:text-blue-400">
                Cart
              </Link>
              <Link to={"/query"} className="block hover:text-blue-400">
                Query
              </Link>
              <Link to={"/login"} className="block hover:text-blue-400">
                User
              </Link>
            </div>
          )}
        </div>
      </div>
      {showSearch && <SearchData onClose = {setShowSearch} />}
    </nav>
  );
};

export default Navbar;
