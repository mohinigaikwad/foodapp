import { createSlice } from "@reduxjs/toolkit";
import foodata from "./../../data/FoodData";


const searchSlice = createSlice({
    name:"search",
    initialState:{
        food:foodata,
        selectedCategory:"all",
        search:"",
    },
    reducers:{

        setfooditem:(state,action)=>{
            state.food = action.payload
        },
        setcetegory :(state,action)=>{
            state.selectedCategory = action.payload
        },
        setsearch:(state,action)=>{
            state.search = action.payload
        }
    }

})

export const { setfooditem, setcetegory, setsearch} = searchSlice.actions

export default searchSlice.reducer