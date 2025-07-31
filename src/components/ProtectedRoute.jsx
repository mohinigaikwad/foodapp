import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({element}) {
    const cartitem = useSelector((state)=>state.cart.cart);
    return cartitem.length > 0 ? element : <Navigate to="/" />
  return (
    <div>ProtectedRoute</div>
  )
}
