import React, { useEffect } from "react";
import Slidebar from "./Slidebar";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-hot-toast";
import { useState } from "react";

const QueryRiply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState({ to: "", sub: "", body: "" });

  

  async function queryData() {
    try {
      const response = await fetch(`/api/querysingledata/${id}`);
      const result = await response.json();
      if (response.ok) {
        setQuery({ to: result.data.Email });
      } else {
        toast.error(error);
      }
    } catch (error) {
      toast.error(error);
      

    }
  }
  useEffect(() => {
    queryData();
  }, []);

  async function handleForm(e) {
    try {
      e.preventDefault();
      console.log(query);
      const response = await fetch(`/api/mailreply/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(query),
      });
      const result = await response.json();
      if(response.ok){
        toast.success(result.message)
        navigate("/admin/adminquery")
      }else{
        toast.error(result.message)
      }
      
    } catch (error) {
      toast.error(error)
      

      
    }
      
     
  }


  function handleChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }
  return (
    <div className="flex mt-16">
      <Slidebar />
      <div className="flex-1 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Riply Query</h1>
        <button
          onClick={() => {
            navigate("/admin/adminquery");
          }}
          className="bg-blue-600 text-xl px-8 py-2 rounded mb-6 hover:bg-blue-700 text-white"
        >
          Back
        </button>
        <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6">
          <form action="" onSubmit={handleForm}>
            <label htmlFor="" className="block text-gray-700 font-medium mb-1">
              To
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded"
              type="text"
              value={query.to}
              onChange={handleChange}
              name="to"
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              From
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded"
              type="text"
              value={"sahildilshad782@gmail.com"}
             
              
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              Subject
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-700 rounded"
              type="text"
              name="sub"
              onChange={handleChange}
              id=""
              value={query.sub}
            />
            <label className="block text-gray-700 font-medium mb-1" htmlFor="">
              Body
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-700 rounded"
              name="body"
              id=""
              value={query.body}
              onChange={handleChange}
            ></textarea>
            <div className="text-right mt-1">
              <button className="bg-blue-500 rounded px-6 py-2 text-white hover:bg-blue-600">
                Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryRiply;
