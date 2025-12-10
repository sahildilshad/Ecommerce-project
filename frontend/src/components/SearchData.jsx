import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

import { toast } from "react-hot-toast";
const SearchData = ({ onClose }) => {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  // debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        fetch(`/api/search?q=${search}`)
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            console.log(result);
            setSearchResult(result.data);
          })
          .catch((err) => {
            toast.error(err);
          });
      }
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <div className="fixed inset-0 bg-white z-[999] p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 px-4 py-2 rounded-full  border-2  focus:outline-none focus:ring-2 focus:ring-blue-800"
          autoFocus
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="ml-3 text-blue-700 hover:text-red-700 text-2xl"
          onClick={() => {
            onClose(false);
          }}
        >
          <IoClose />
        </button>
      </div>

      <div className="mt-4 space-y-4">
      
        <div className="flex justify-between items-center shadow-lg border p-3">
          {
            searchResult.length>0?
          
          searchResult.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <img
                  src={`/uploads/${item.productImage}`}
                  alt=""
                  className="w-full h-32 object-contain reounded "
                />
              </div>

              <h2 className="font-semibold">{item.productName}</h2>
              <p className="text-sm font-bold text-blue-500">
                {item.productCategory}
              </p>
              <p className="text-green-500">₹{item.productPrice}</p>
            </div>
          )):<p className="text-center text-red-600">No result found</p> }
        </div>
      </div>
    </div>
  );
};

export default SearchData;
