import React from 'react'
import prd1 from "../../assets/imgs/Product1.jpg"
import prd2 from "../../assets/imgs/Product2.jpg"
import prd3 from "../../assets/imgs/Product3.jpg"
import prd4 from "../../assets/imgs/Product4.jpg"
import { Link } from 'react-router-dom'
export default function Products({handleAddToCart}) {
  const products = [
    {
      id: 1, prdName: "Tivi Sony", price: 7000000, prdImage: prd1, description: "tivi Sony hãng mới ra mắt"
    },
    {
      id: 2, prdName: "Tivi Panasonic", price: 8000000, prdImage: prd2, description: "tivi Panasonic hãng mới ra mắt"
    },
    {
      id: 3, prdName: "Tivi LG", price: 8000000, prdImage: prd3, description: "tivi LG hãng mới ra mắt"
    },
    {
      id: 4, prdName: "Tivi Samsung ", price: 8000000, prdImage: prd4, description: "tivi Samsung hãng mới ra mắt"
    }
  ]
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'> Danh sách Tivi</h2>
      <div className='grid grid-cols-4 space-x-5'>
        { 
          products.map((product) => {
            return(
            <div key={product.id} className='bg-white shadow-md rounded-lg'>
              <img src={product.prdImage} alt={product.prdName} className='w-80 h-full object-cover'/>
              <h3 className='text-lg font-semibold'>{product.prdName}</h3>
              <p className='text-red-600 font-medium text-lg'>{product.price} VND</p>
              <Link to ={`/detail/${product.id}`} state ={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
              <button onClick={() => {handleAddToCart(product)}} className='w-full block bg-green-500 text-white py-2 rounded-lg mb-2'>Thêm vào giỏ hàng</button>
            </div>
            )
        })
        }
      </div>
    </section>
  )
}
