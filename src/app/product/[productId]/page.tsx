"use client";
import FooterSticky from "@/components/Cart/FooterSticky";
import ImageSlider from "@/components/common/ImageSlider";
import Product from "@/components/common/Product";
import { Button } from "@/components/ui/button";
import { ProductT } from "@/interfaces";
import axios from "axios";
import {
  Heart,
  Share,
  Share2Icon,
  ShoppingCart,
  Star,
  StepForward,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

export default function ProductDynamic(props: Props) {
  const [product, setData] = useState<ProductT | null>(null);
  const id = usePathname().split("/")[usePathname().split("/").length - 1];
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data.product);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className="mt-5 ">
       {product && <ImageSlider images={product?.images} />}
        <div className="flex justify-between items-center mx-2">
          <div className="w-4/6">
            <p>{product?.description}</p>
            <h1 className="text-bold text-black text-xl">
              Price :{" "}
              <span className="text-sm line-through mx-2">
                ₹ {product?.price}
              </span>
              ₹{" "}
              {(
                product?.price! -
                (product?.price! * product?.discountPercentage!) / 100
              ).toFixed(2)}{" "}
            </h1>
            <h2 className=" inline-flex bg-green-700 px-3 py-1 justify-center items-center text-white space-x-2 rounded-full">
              {" "}
              {product?.rating} <Star size={18} color="#FFFFFF" />
            </h2>
            <p
              className={`${
                product?.stock! < 5 ? "text-red-800" : " text-pink-600 "
              } py-1`}
            >
              Stock Avalable :{" "}
              {product?.stock == 0
                ? "item Out of Stock "
                : product?.stock! < 5
                ? "Only " + product?.stock + " items"
                : product?.stock + " items"}
            </p>
          </div>
          <div
            className="w-1/6 flex flex-col justify-center items-center hover:cursor-pointer"
            // onProgress={()=>console.log("Haear cliced")}
          >
            <Heart size={25} color="pink" />
            <span className="text-sm">Whishlist</span>
          </div>
          <div
            className="w-1/6 flex flex-col justify-center items-center hover:cursor-pointer"
            // onProgress={()=>console.log("Share cliced")}
          >
            <Share2Icon size={25} color="#414141" />
            <span className="text-sm">Share</span>
          </div>
        </div>
        <div className="my-4 border-y-2 mx-2">
          <h2 className="text-pink-600 font-Rubik font-bold text-xl my-2">
            Product Discription
          </h2>
          <p>{product?.description}</p>
        </div>

        {/* product footer for bayNow or add to cart */}
        {product && <FooterSticky product={product} />}
      </div>
    </>
  );
}
