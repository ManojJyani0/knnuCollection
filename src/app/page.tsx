"use client"
import Product from '@/components/common/Product'
import { LoadProducts } from '@/features/Product/Slice'
import { ProductT } from '@/interfaces'
import { AppDispatch } from '@/store'

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const [products, setProducts] = useState<ProductT[]>([])
  useEffect(()=>{
    fetch('/api/products').then(data=>data.json()).then(data=>{
      console.log(data.data)
      setProducts(data.data)
      dispatch(LoadProducts(data.data))}
      ).catch(e=>console.log(e))
  },[])
  return ( 
    <main className="flex min-h-screen flex-col justify-normal mx-2">
      <div className='flex justify-start items-start py-2 border-y-1'>
        <h1 className='text-pink-600 text-xl'>Product For You</h1>
      </div>
      {products && products.map((product:ProductT)=><Product key={product._id} product={product}/>)}
    </main>
  )
}
