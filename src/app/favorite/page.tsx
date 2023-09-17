"use client"
import Product from '@/components/common/Product'
import { WishListSelector } from '@/features/Product/Slice'
import { ProductT } from '@/interfaces'
import { useSelector } from 'react-redux'

export default function Home() {
  const products  = useSelector(WishListSelector)
 
  return ( 
    <main className="flex min-h-screen flex-col justify-normal mx-2">
      <div className='flex justify-start items-start py-2 border-y-1'>
        <h1 className='text-pink-600 text-xl'>Product You Like Most</h1>
      </div>
      {products && products.map((product:ProductT)=><Product key={product._id} product={product}/>)}
    </main>
  )
}
