import React from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [edit, setEdit] = useState({});

  async function editvalueData() {
    try {
      const response = await fetch(`/api/editvaluedata/${id}`);
      const result = await response.json();

      if (response.ok) {
        setEdit(result.data);
        console.log(result);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  useEffect(() => {
    editvalueData();
  }, []);

  async function handleForm(e) {
    e.preventDefault();
    try {
          const formData = {
      Pname: edit.productName,
      Pprice: edit.productPrice,
      Cat: edit.productCategory,
      Pstatus: edit.productStatus,
    };
    const response = await fetch(`/api/productupdate/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
  if(response.ok){
    toast.success(result.message)
    navigate("/admin/adminproduct")
  }else{
    toast.error(result.message)
  }

      
    } catch (error) {
      toast.error(error)
      
    }
  }
  function handleChange(e) {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  }
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">
          Update Products
        </h1>
        <button
          onClick={() => {
            navigate("/admin/adminproducts");
          }}
          className="bg-blue-600 text-xl px-8 py-2 rounded hover:bg-blue-700 text-white"
        >
          Back
        </button>
        <form
          onSubmit={handleForm}
          action=""
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6 mt-4"
        >
          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Product Name
          </label>

          <input
            className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2"
            type="text"
            value={edit.productName || ""}
            name="productName"
            onChange={handleChange}
          />
          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Price{" "}
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2"
            type="number"
            name="productPrice"
            id=""
            value={edit.productPrice}
            onChange={handleChange}
          />
          <label className="block text-gray-700 font-medium mb-1" htmlFor="">
            Category
          </label>
          <select
            value={edit.productCategory}
            name="productCategory"
            onChange={handleChange}
            id=""
            className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2"
          >
            <option value="cafe">Cafe</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
            <option value="fresh">Fresh</option>
            <option value="electronics">Electronis</option>
            <option value="beauty">Beauty</option>
          </select>
          <label htmlFor="" className="block text-gray-700 font-medium mb-1">
            Status
          </label>
          <select
            name="productStatus"
            value={edit.productStatus}
            onChange={handleChange}
            id=""
            className="w-full px-4 py-2 border border-gray-500 rounded focus:outline-none focus:ring-2"
          >
            <option value="">---select---</option>
            <option value="In-Stock">In-Stock</option>
            <option value="Out-stock">Out-Stock</option>
          </select>

          <div className="text-right">
            <button className="bg-blue-600 text-white px-6 py-2 rounded  hover:bg-blue-700 mb-2">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
