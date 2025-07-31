import React from "react";
import SingleCard from "./SingleCard";
// import data from "./../data/FoodData.js";
import {Toaster,toast} from "react-hot-toast"; 
import { useDispatch, useSelector } from "react-redux";


export default function FoodItem() {
  const {food,selectedCategory,search} = useSelector((state)=>state.search)

const filterdfooditem = food.filter((item)=>{
  console.log("this is food item data", item);
  
const matchcategory = selectedCategory === "all" || item.category === selectedCategory;
const matchsearch = item.name.toLowerCase().includes(search.toLowerCase())
return matchcategory && matchsearch
})
  const handletoast = (name) => toast.success(`Added ${ name }`);
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className="flex flex-wrap gap-20  justify-start lg: justify-center">
      {filterdfooditem?.map((item) => {
        // console.log(item);

        const { id, name, price, desc, img, rating } = item;
        return (
          <SingleCard
            key={id}
            id={id}
            name={name}
            img={img}
            desc={desc}
            price={price}
            rating={rating}
            handletoast={handletoast}
          />
        );
      })}
    </div>
    </>
  );
}
