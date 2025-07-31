import {  createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addTocart :(state,action)=>{
            const item = action.payload
            const existingitem = state.cart.find((cartitem,i)=> {
               return cartitem.id === item.id 
                
            })
           ;
            
            console.log("this is existing item", existingitem);
            if (existingitem) {
                existingitem.qty+=1;
                // existingitem.qty = existingitem.qty +1;
            }else{

                state.cart.push({...item,qty:1})
            
            }
            // state.cart.push(action.payload)
            

        },
        removecart :(state,action)=>{
            console.log("delete called");
            
           state.cart = state.cart.filter((item)=>item.id !== action.payload)
           console.log(state.cart);
           
        },
        increaseqty:(state,action)=>{
            const item = state.cart.find((i)=>i.id === action.payload)
            if (item) {
                item.qty +=1;
            }
        },

        decreaseqty:(state,action)=>{
            const item = state.cart.find((i)=>i.id === action.payload)
            if (item && item.qty > 1) {
                item.qty -=1;
                
            }
        },
        clearcart:(state)=>{
            state.cart = [];
        }
    }
})

export  const {addTocart,removecart,increaseqty,decreaseqty,clearcart
     
}= CartSlice.actions 
export default CartSlice.reducer;