"use client";

import { Heart, Star } from "lucide-react";
import { ProductT } from "@/interfaces";
import ImageSlider from "./ImageSlider";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { AddtoWishList } from "@/features/Product/Slice";

type Props = {
  product: ProductT
};

function Product({ product }: Props): React.JSX.Element {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  console.log(product._id)
  return (
    <div className="border-y-2">
      <div className="">
        <ImageSlider images={product.images} />
      </div>
      <div >
        <div className="flex justify-between" onClick={() => router.push(`/product/${product._id}`)}>
          <h1 className="text-bold text-fuchsia-950 text-xl">{product?.title}</h1>
          <section className=" flex flex-col items-center">
            <h1 className="text-bold text-black text-sm line-through">Price : ₹ {product.price}</h1>
            <h1 className="text-bold text-pink-600 font-bold text-lg"> Offer : ₹ {(
              product?.price -
              (product?.price * product?.discountPercentage) / 100
            ).toFixed(2)}</h1>

          </section>
        </div>
        <div className="flex justify-between">
        <h2 className=" inline-flex bg-green-700 px-3 py-1 justify-center items-center text-white space-x-2 rounded-full">  {product.rating} <Star size={18} color="#FFFFFF" /></h2>
        <Heart size={30} className="text-pink-600" onClick={()=>dispatch(AddtoWishList(product))} />
        </div>
        <p>
          {product?.description}
        </p>
      </div>
    </div>
  );
}

export default Product;
