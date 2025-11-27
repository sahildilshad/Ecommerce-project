import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [product, setProduct] = useState([]);

  async function getAllproducts() {
    try {
      const response = await fetch("/api/getproduct");
      const result = await response.json();
      if (response.ok) {
        setProduct(result.data);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  useEffect(() => {
    getAllproducts();
  }, []);
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Admin Dashboard
        </h1>
        <div className="grid grid-flow-col">
          <div
            className="bg-white shadow-xl
            p-6 rounded"
          >
            <h2 className="text-xl font-semibold text-gray-700">
              Total Products
            </h2>
            <p className="text-3xl mt-3 font-bold text-green-500">
              {product.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
