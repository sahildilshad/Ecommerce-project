import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosCafe } from "react-icons/io";
import { MdOutlineToys, MdOutlineHome } from "react-icons/md";
import { CiApple, CiLaptop } from "react-icons/ci";
import { GiLipstick } from "react-icons/gi";

const Category = () => {
  const categories = [
    { name: "All", icon: <FaShoppingCart /> },
    { name: "Cafe", icon: <IoIosCafe /> },
    { name: "Home", icon: <MdOutlineHome /> },
    { name: "Toys", icon: <MdOutlineToys /> },
    { name: "Fresh", icon: <CiApple /> },
    { name: "Electronics", icon: <CiLaptop /> },
    { name: "Beauty", icon: <GiLipstick /> },
  ];

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex sm:justify-center overflow-x-auto">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px] text-sm text-blue-400 hover:text-blue-500 cursor-pointer">
              <div className="text-xl mb-1">{cat.icon}</div>
              <div className="text-center">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
