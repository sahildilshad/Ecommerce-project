import React, { useEffect, useState } from "react";
import Slidebar from "./Slidebar";
import { Link } from "react-router";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const AdminProducts = () => {
  const [product, setProduct] = useState([]);
  async function getAllProduct() {
    try {
      const respone = await fetch("/api/getproduct");
      const result = await respone.json();
      console.log(result);
      
      if (respone.ok) {
        setProduct(result.data);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  async function handleDelete(id) {
    try {
    const response =   await fetch(`/api/productdelete/${id}`, {
        method: "DELETE",
      });
    const result = await  response.json()
    if(response.ok){
      toast.success(result.message)
      getAllProduct();
    }else{
      toast.error(result.message)
    }
    
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Manage Products
        </h1>
        <Link to={"/admin/add-products"}>
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add products
          </button>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5  ">
          {product.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-4 hover:shadow-xl"
            >
              <img
                src={`/uploads/${item.productImage}`}
                className="w-full h-40 mb-4  border object-contain rounded-md "
                alt=""
              />
              <h3 className="text-xl font-semibold text-gray-700">
                {item.productName}
              </h3>
              <p className="text-sm text-gray-600">
                {" "}
                Category :- {item.productCategory}
              </p>
              <p className="text-sm text-green-600 font-bold mt-1">
                ${item.productPrice}
              </p>
              <p className="text-blue-600 mt-1 font-bold">In-Stock</p>
              <div className="flex flex-col sm:flex-row text-xl justify-between mt-4">
                <Link
                 
                  to={`/admin/edit-products/${item._id}`}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-bold"
                >
                  <FaEdit />
                </Link>
                <Link
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                  className="flex items-center gap-3 text-red-500 hover:text-red-600 font-bold"
                >
                  <MdDelete />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
