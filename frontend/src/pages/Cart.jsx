import React, { useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { cartTotal, DecrementQuantity, deleteCartItem, IncrementQuantity,saveCart} from "../features/Cart/CartSlice";
const Cart = () => {
  const navigate = useNavigate();
 const cartData =  useSelector((state)=>state.Cart.cart
)
const cartAllTotal = useSelector((state)=>state.Cart)
const dispatch =  useDispatch()

  useEffect(()=>{
    dispatch(cartTotal())
  },[cartData,dispatch])
  
  useEffect(()=>{
    dispatch(saveCart({
      cartItems:cartData,
      totalPrice:cartAllTotal.TotalPrice,
      totalQuantity:cartAllTotal.TotalQuantity
    }))


  },[cartData,cartAllTotal,dispatch])
  return (
    <div className="fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="absolute top-3 right-3 text-2xl text-blue-500 hover:text-blue-600 z-50"
        >
          <IoIosClose></IoIosClose>
        </button>
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-4">
          {" "}
          Your Cart 🛍️
        </h2>
        {
         cartData.map((value,index)=>(
             <ul className="divide-y divide-blue-500">
          <li className="flex items-center gap-5 py-4 ">
            <img
              src= {`/uploads/${value.productImage}`}
              className="w-16 h-16 rounded object-cover"
              alt=""
            />
            <div className="flex-1">
              <h3 className="font-semibold text-blue-500">{value.productName}</h3>
            </div>
            <p className="text-green-500 text-xl font-semibold">₹{value.productPrice}</p>
            <div className="flex items-center gap-2">
              <button className="px-2 py-1 bg-blue-400 rounded hover:bg-blue-500">
                <FaPlus onClick={()=>{dispatch(IncrementQuantity(value))}} className="text-white" />
              </button>
              <span className="px-2 text-xl">{value.qunatity}</span>
              <button className="px-2 py-1 bg-blue-400 rounded hover:bg-blue-500">
                <FaMinus onClick={()=>{dispatch(DecrementQuantity(value))}} className="text-white" />
              </button>
            </div>
            
            <MdDelete onClick={()=>{dispatch(deleteCartItem(value))}} className="text-xl text-blue-500 hover:text-blue-600 cursor-pointer" />
          </li>
        </ul>

          ))
        }

        <div className="mt-6 text-right">
          <p className="text-xl text-blue-500 font-bold">Total Product Quantity :- <span className="text-green-500 font-bold">{cartAllTotal.TotalQuantity}</span></p>
          <p className="text-xl text-blue-500 font-bold">Total :- <span className="text-green-500 font-bold">₹{cartAllTotal.TotalPrice}</span></p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Checkout</button>
        </div>
       
      </div>
    </div>
  );
};

export default Cart;
