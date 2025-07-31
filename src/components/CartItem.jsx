import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {decreaseqty,increaseqty,removecart,
} from "./../Redux/Slices/CartSlice";
import  { Toaster,toast } from "react-hot-toast";

export default function CartItem({ id, name, qty, img, price,handletoast }) {
  const dispatch = useDispatch();
  return (
    <div className="flex mx-auto   w-[100%] gap-3 shadow-md rounded-lg p-2 mb-3 focus:border-amber-500 text-gray-700 placeholder-gray-400 ">
      <MdDelete
        className="absolute right-7 text-gray-500 cursor-pointer"
        onClick={() => {
          dispatch(removecart(id));
          toast(`${name} Removed`, {
            icon: "👋👋",
          }
        );
        }}
      />
      <img className="w-[50px] h-[50px]" src={img} alt="" />

      <div className="flex-1">
        <h2 className="font-bold text-gray-500">{name}</h2>
        <div className=" flex justify-between flex-row gap-3">
          <span className="text-amber-500 font-bold">${price}</span>
          <div className="icons  flex justify-center items-center absolute right-7 gap-3">
           
           <AiOutlineMinus
              onClick={() =>{dispatch(decreaseqty(id))}}
              className="border-2  border-amber-600 text-gray-600 hover:text-black bg-amber-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
           
           <span>{qty}</span>

            <AiOutlinePlus
              onClick={() => {
                 if (qty >= 5 ) {
                  toast.error("Limited exceeded: max 5 items are allowed,")
                }else{
                  dispatch(increaseqty(id))}

                }
              }
               
              className="border-2 border-amber-600 text-gray-600 hover:text-black bg-amber-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
