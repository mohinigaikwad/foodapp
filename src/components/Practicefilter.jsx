import React,{useState} from 'react'

export default function Practicefilter(){
    const [category, setcategory] = useState("all")
    const [searchterm, setsearchterm] = useState()
    const products = [
  { id: 1, name: "T-Shirt", category: "fashion", price: 499 },
  { id: 2, name: "Microwave", category: "appliances", price: 2999 },
  { id: 3, name: "iPhone", category: "mobile", price: 69999 },
  { id: 4, name: "Lipstick", category: "beauty", price: 199 },
  { id: 5, name: "Shoes", category: "fashion", price: 899 },
  // any new category can be added here
];

const allcategories = ["all", ...new Set(products.map((item,i)=> item.category))]

const filterproducts = products.filter((product)=>{
    const matchcategory =  category === "all" || product.category
    const matchsearch = product.name.toLowerCase().includes(setsearchterm.toLowerCase());
    return matchcategory && matchsearch
})   
  return (
      <div className="p-4">
      {/* Dynamic Category Buttons + Search */}
      <div className="flex flex-wrap gap-3 mb-4">
        {allcategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${category === cat ? "bg-amber-500 text-white" : "bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 border rounded"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="p-3 shadow-md rounded">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-black font-bold">₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  
  )
}
