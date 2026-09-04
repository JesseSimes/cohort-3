import React from 'react'

const Product = ({product, del}) => {
  return (
    <div className="p-2 border-2 rounded">
      <div className="w-40">
        <img src={product.image}
        alt=""/>
      </div>
      <div className="">
        <p className="font-semibold">{product.title.substring(0, 20)}...</p>
        <p className="text-xs">{product.category}</p>
        <p className="text-green-500 font-semibold">{product.price}</p>
      </div>
      <button onClick={() => del(product.id)} className="bg-red-500 text-white py-1 px-4 rounded">Delete</button>
    </div>
  )
}

export default Product