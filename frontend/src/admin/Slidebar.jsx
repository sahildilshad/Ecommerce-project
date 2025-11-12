import React from "react";
import { Link } from "react-router";
import { MdDashboard } from "react-icons/md";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineQueryStats,
} from "react-icons/md";
import { IoMdExit } from "react-icons/io";

const Slidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-6 space-x-6 ">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav
        className="space-y-4
      "
      >
        <Link to={"/admin/dashboard"} className="block hover:text-blue-600">Dashboard <MdDashboard className="inline"/> </Link>
        <Link to={"/admin/adminproducts"} className="block hover:text-blue-600">Manage Products <MdOutlineProductionQuantityLimits className="inline" /></Link>
        <Link className="block hover:text-blue-600">Manage Quires < MdOutlineQueryStats className="inline"/> </Link>
        <Link className="block hover:text-red-400">Exit the store <IoMdExit className="inline" />
 </Link>
      </nav>
    </div>
  );
};

export default Slidebar;
