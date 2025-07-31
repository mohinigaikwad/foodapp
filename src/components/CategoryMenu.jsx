import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setcetegory } from "../Redux/Slices/SearchSlice";
export default function CategoryMenu() {
  const dispatch = useDispatch();

  const fooddata = useSelector((state) => state?.search?.food || []);
  const selctedcategory = useSelector(
    (state) => state?.search?.selectedCategory || "all"
  );
  console.log(fooddata);

  const allcategories = ["all", ...new Set(fooddata?.map((p) => p.category))];
  console.log(allcategories);

  // const filterproduct = fooddata.filter((product)=>{
  //   const matchaterogy = selctedcategory === "all" || product.category ===selctedcategory
  //  return matchaterogy
  // })

  return (
    <div>
      <h1 className=" text-4xl text-black-500  font-bold my-5">
        Find the best food
      </h1>
      <div className="btnrap  flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {allcategories?.map((cat) => {
          return (
            <button
              onClick={() => dispatch(setcetegory(cat))}
              className={`px-6 py-4 font-bold  hover:bg-amber-500  hover:text-black rounded-lg

                ${
                  cat === "all"
                  ? "bg-amber-500"
                  : selctedcategory === cat 
                  ? "bg-gray-300"
                  : "bg-gray-300"
                }
                `}
            >
              {cat}
            </button>
          );
        })}
        {/* <button className=' px-6 py-4 bg-gray-200 font-bold rounded-lg  hover:bg-amber-500  hover:text-black'>Lunch</button>
            <button className=' px-6 py-4 bg-gray-200 font-bold rounded-lg  hover:bg-amber-500  hover:text-black'>Breakfast</button>
            <button className=' px-6 py-4 bg-gray-200 font-bold rounded-lg  hover:bg-amber-500  hover:text-black'>Dinner</button>
            <button className=' px-6 py-4 bg-gray-200 font-bold rounded-lg  hover:bg-amber-500  hover:text-black'>Snacks</button> */}
      </div>
    </div>
  );
}
