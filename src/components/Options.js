import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const Options = ({ resto }) => {
  // useEffect(()=>{
  //     return resto.setVisibal(false)
  // },[])
  const dispatch = useDispatch();
  const addItems = (res) => {
    dispatch(addItem(res));
  };
  const removeItems = () => {
    dispatch(removeItem());
  };
  // const resto = resto.resto
  console.log(resto);
  return (
    <div className="space-y-6 p-4">
      {resto?.map((res) => (
        <div
          key={res.id}
          className="w-full bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="font-bold text-xl mb-2 text-gray-800">{res.name}</h1>
          <p className="text-gray-600 mb-2">{res.address}</p>
          <p
            className={`mb-2 font-medium ${
              res.promoted ? "text-green-500" : "text-red-500"
            }`}
          >
            {res.promoted ? "Promoted" : "Not Promoted"}
          </p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 font-bold">{res.rating}</span>
            <span className="ml-2 text-sm text-gray-500">/ 5 Ratings</span>
          </div>
          <p className="text-gray-700">{res.reviews} Reviews</p>
          <button  onClick={()=>addItems(res)}className="p-3 bg-black text-white">
            Add
          </button>
          <button onClick={removeItems} className="p-3 bg-black text-white">
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Options;
