import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/CartSlice";
import searchSlice from "./Slices/SearchSlice";

const Store  = configureStore({
     reducer:{
        cart: CartSlice,
        search:searchSlice
     }
})
export default Store