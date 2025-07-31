import React, { useState, useEffect } from "react";
// import { PropagateLoader } from "react-spinners";
import { HashLoader } from "react-spinners";

export default function Success() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen  align-middle">
      {loading ? (
        // <PropagateLoader/>
        <HashLoader color="#f19206" size={90} />
      ) : (
        <div>
         
          <h1 className="text-4xl font-bold text-center text-amber-600 text-shadow-black">
            Order Successful!
          </h1>
          <p>Your order has been successfully Placed</p>
        </div>
      )}
    </div>
  );
}
