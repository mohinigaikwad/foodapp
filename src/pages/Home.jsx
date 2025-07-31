import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItem from '../components/FoodItem'
import FoodCart from '../components/FoodCart'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <CategoryMenu/>
        <FoodItem/>
        <FoodCart/>
    </div>
  )
}
