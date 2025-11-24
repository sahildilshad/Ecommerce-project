import React, { useState, useEffect } from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-hot-toast";

const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [edit, setEdit] = useState({
    Pname: "",
    Pprice: "",
    Cat: "",
    Pstatus: ""
  });

  // ---- Fetch current product data ----
  async function editvalueData() {
    try {
      const response = await fetch(`/api/editvaluedata/${id}`);
      const result = await response.json();

      if (response.ok) {
        setEdit({
          Pname: result.data.productName,
          Pprice: result.data.productPrice,
          Cat: result.data.productCategory,
          Pstatus: result.data.productStatus
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  useEffect(() => {
    editvalueData();
  }, []);

  // ---- Handle Input Change ----
  function handleChange(e) {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  }

  // ---- Submit Form ----
  async function handleForm(e) {
    e.preventDefault();

    try {
      const response = await fetch(`/api/productupdate/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(edit),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/admin/adminproducts"); // Correct path
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Update Products</h1>

        <button
          onClick={() => navigate("/admin/adminproducts")}
          className="bg-blue-600 text-xl px-8 py-2 rounded hover:bg-blue-700 text-white"
        >
          Back
        </button>

        <form
          onSubmit={handleForm}
          className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6 mt-4"
        >
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            className="w-full border px-4 py-2"
            name="Pname"
            value={edit.Pname}
            onChange={handleChange}
          />

          <label className="block font-medium">Price</label>
          <input
            type="number"
            className="w-full border px-4 py-2"
            name="Pprice"
            value={edit.Pprice}
            onChange={handleChange}
          />

          <label className="block font-medium">Category</label>
          <select
            name="Cat"
            value={edit.Cat}
            onChange={handleChange}
            className="w-full border px-4 py-2"
          >
            <option value="">---select---</option>
            <option value="cafe">Cafe</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
            <option value="fresh">Fresh</option>
            <option value="electronics">Electronics</option>
            <option value="beauty">Beauty</option>
          </select>

          <label className="block font-medium">Status</label>
          <select
            name="Pstatus"
            value={edit.Pstatus}
            onChange={handleChange}
            className="w-full border px-4 py-2"
          >
            <option value="">---select---</option>
            <option value="In-Stock">In-Stock</option>
            <option value="Out-of-Stock">Out-of-Stock</option>
          </select>

          <div className="text-right">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProducts;
