import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../Redux/Slices/CartSlice'


export default function SingleCard({id, name, price, desc, img, rating,handletoast}) {
  const dispatch = useDispatch()
    
  const handleaddTocart = ()=>{
    dispatch((addTocart({id,name, price ,img, rating, qty:1})))
    handletoast(name)
  }

    
  return (

    <div >
        <div class="max-w-xs rounded-2xl mt-8 overflow-hidden shadow-lg hover:scale-1.3 bg-gray-100">
  <img class="w-full py-4 px-3 h-48 object-cover" src={img} alt="Food Image"/>
  <div class="p-4">
    <h2 class="text-xl font-semibold text-gray-800">{name}</h2>
    <p class="text-gray-600 mt-1">{desc.slice(0,50)}..</p>
    <div class="mt-4 flex justify-between items-center">
      <span class="text-lg font-bold text-black-500">₹{price}⭐⭐⭐</span>
      <button onClick={handleaddTocart} class="bg-amber-500 hover:bg-omber-500 text-black px-4 py-2 rounded-xl text-sm">Add to Cart</button>
    </div>
  </div>
</div>

    </div>
  )
}

