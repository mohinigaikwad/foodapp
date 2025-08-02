import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { clearcart } from "../Redux/Slices/CartSlice";
import { useNavigate } from "react-router-dom";

export default function FoodCart() {
  const [activecart, setactivecart] = useState(false);
  const navigate = useNavigate();

  const cartitems = useSelector((state) => state.cart.cart);
  console.log("caeritems", cartitems);

  const dispatch = useDispatch();

  const totalprice = cartitems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // first cart is from reducers cart  that is name of cartslice and anothercart is cart of slice initialvalue ok
  console.log(cartitems);

  return (
    <>
      <div
        className={`fixed  right-0 top-0 w-full  lg:w-[20vw]   h-full p-5 bg-white  ${
          activecart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex flex-col justify-between  h-full">
          {/* head */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl  font-bold text-gray-700">Order Now</span>
            <MdClose
              onClick={() => {
                setactivecart(!activecart);
              }}
              className="border-2 border-gray-400  text-gray-500 font-bold p-1 text-xl rounded-md hover:text-amber-500 hover:border-amber-400 cursor-pointer"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {cartitems.length > 0 ? (
              cartitems.map((food) => {
                const { id, name, price, qty, img } = food;
                return (
                  <CartItem
                    key={id}
                    id={id}
                    name={name}
                    price={price}
                    img={img}
                    qty={qty}
                  />
                );
              })
            ) : (
              <>
                <h2 className="text-center text xl font-bold text-gray-400">
                  "your cart is empty"
                </h2>
                <img
                  className="h-50 w-80  mx-auto  "
                  src="	https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                  alt=""
                />
              </>
            )}

            {/* <CartItem/>
      <CartItem/>
      <CartItem/> */}
          </div>

          <div className="card-footer absolute bottom-0 ">
            <h3 className=" font-semibold text-gray-700">
              Items:{cartitems.reduce((total, item) => total + item.qty, 0)}
            </h3>
            <h3 className="  font-semibold text-gray-700">
              Totoal Amount :${totalprice}{" "}
            </h3>
            <hr className="w-[90vw] lg:w-[18vw] my-4" />
            <button
              onClick={() => {
                // dispatch(clearcart());
                navigate("/success");
              }}
              className="bg-amber-500 rounded-lg font-bold w-[80vw] lg:w-[18vw] py-6 px-4 mb-5"
            >
              Checout
            </button>
          </div>
        </div>
      </div>
      <FaCartShopping
        onClick={() => setactivecart(!activecart)}
        className={`shadow-md rounded-full bg-amber-500 text-5xl p-3  fixed top-9 right-3 sm:fixed top-9 right-8
         
      
          `}
      />
    </>
  );
}
