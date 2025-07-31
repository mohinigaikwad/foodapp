import React, { use } from 'react'
import {  useDispatch,useSelector } from "react-redux";
import { setsearch } from '../Redux/Slices/SearchSlice';

export default function Navbar() {
  const dispatch = useDispatch()
  const search = useSelector((state)=>state.search.search)
  console.log(search);
  
  return (
    <>
    <nav className='flex flex-col lg:flex-row  justify-between py-8 '>
        <div className="right">
            <h3 className='text-5xl font-bold text-gray-500'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-5xl font-bold text-gray-500'>Foodi</h1>
        </div>
        <div className="left">
            <input type="search"
             name='search' 
             id=''
             value={search}
             onChange={(e)=>dispatch(setsearch(e.target.value))}
             placeholder='search here'
             autoComplete='off'
             className='p-3 border border-amber-500 shadow-md rounded-lg outline-lime-50 w-3xl focus:ring-2 focus:ring-amber-500 shadow-sm transition duration-300'
             />
        </div>
    </nav>

        
    </>
  )
}
