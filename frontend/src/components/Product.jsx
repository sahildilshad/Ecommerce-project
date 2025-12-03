import React, { useEffect, useState } from "react";
import Category from "../pages/Category";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("All");
  const dispatch  =  useDispatch()

  async function productData(selectCategory="All") {
    try {
      const response = await fetch(`/api/userproducts?category=${selectCategory}`);
      const result = await response.json();
      setProduct(result.data);
    } catch (error) {
      toast.error(error)
    }
  }
  useEffect(() => {
    productData(category);
  }, [category]);



  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <Category onselectCat={setCategory}  />
      <h2 className="text-center text-2xl font-semibold mb-6 mt-2 text-blue-600">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from from-blue-100 via-white to-white shadow-lg rounded-lg p-3 hover:shadow-xl transition"
          >
            <img
              src={`/uploads/${item.productImage}`}
              alt=""
              className="w-full h-48 object-cover rounded mb-1"
            />
            <h3>{item.productName}</h3>
            <p className="mt-1 font-normal">{item.productCategory}</p>
            <p className="text-green-500 font-bold">₹{item.productPrice}</p>
            <button onClick={()=>{dispatch(addToCart(item))}} className="bg-blue-500 px-2 py-2 rounded-md text-white mt-2 hover:bg-blue-600">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
