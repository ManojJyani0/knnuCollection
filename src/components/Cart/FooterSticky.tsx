"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, ShoppingCart, StepForward } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ProductT } from "@/interfaces";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { AddtoCart } from "@/features/Product/Slice";

type Props = {
  product: ProductT;
};

export default function FooterSticky({ product }: Props) {
  const sizes = ["x", "xl", "l", "m", "xxl"];
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState("");
  return (
    <>
      <div className="z-100 bg-gray-50 sticky bottom-0 h-16 flex justify-center items-center space-x-4 mt-3 border-t px-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} className="border-pink-900 w-full">
              <ShoppingCart size={30} color="pink" /> Add to Cart
            </Button>
          </SheetTrigger>
          <SheetContent side={"bottom"}>
            <div className=" border-b-2">
              {" "}
              <h1>Add to Cart</h1>
            </div>
            <div className=" border-b-2 py-3">
              <h1 className="pb-3">Select Size</h1>
              <ul className="flex flex-row justify-between items-center">
                {sizes.map((str) => (
                  <li key={str}
                    className={`inline-flex justify-center items-center border border-red-600 px-4 rounded-full hover:bg-pink-600 hover:text-white hover:cursor-pointer ${
                      str === size ? "bg-pink-600" : ""
                    }`}
                    onClick={() => setSize(str)}
                  >
                    {" "}
                    {str.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <h1> Select Quanttiy </h1>
              <h1>
                <span
                  className="text-2xl font-bold hover:cursor-pointer p-2"
                  onClick={() =>
                    quantity > 1
                      ? setQuantity((current) => current - 1)
                      : setQuantity((current) => current)
                  }
                >
                  -
                </span>{" "}
                <span className="text-2xl font-bold ">{quantity}</span>{" "}
                <span
                  className="text-2xl font-bold hover:cursor-pointer p-2"
                  onClick={() =>
                    quantity < product.stock
                      ? setQuantity((current) => current + 1)
                      : setQuantity((current) => current)
                  }
                >
                  +
                </span>
              </h1>
            </div>
            <div className="flex justify-between items-center py-4">
              <Image
                className="p-2 border rounded-lg border-pink-400"
                src={product.thumbnail}
                alt=""
                width="150"
                height="150"
              />
              <h1>{product.title}</h1>
              <h1>{product.price * quantity}</h1>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  className="text-white bg-pink-600 w-full"
                  onClick={() =>
                    dispatch(AddtoCart({ ...product, quantity, size }))
                  }
                >
                  <ShoppingCart size={30} color="pink" /> Add to Cart
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="text-white bg-pink-600 w-full">
              <StepForward size={30} color="#ffffff" className="px-1" /> Buy Now
            </Button>
          </SheetTrigger>
          <SheetContent side={"bottom"}>
            <div className=" border-b-2">
              {" "}
              <h1>Buy Now</h1>
            </div>
            <div className=" border-b-2 py-3">
              <h1 className="pb-3">Select Size</h1>
              <ul className="flex flex-row justify-between items-center">
                {sizes.map((str) => (
                  <li key={str}
                    className={`inline-flex justify-center items-center border border-red-600 px-4 rounded-full hover:bg-pink-600 hover:text-white hover:cursor-pointer ${
                      str === size ? "bg-pink-600" : ""
                    }`}
                    onClick={() => setSize(str)}
                  >
                    {" "}
                    {str.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between">
              <h1> Select Quanttiy </h1>
              <h1>
                <span
                  className="text-2xl font-bold hover:cursor-pointer p-2"
                  onClick={() =>
                    quantity > 1
                      ? setQuantity((current) => current - 1)
                      : setQuantity((current) => current)
                  }
                >
                  -
                </span>{" "}
                <span className="text-2xl font-bold ">{quantity}</span>{" "}
                <span
                  className="text-2xl font-bold hover:cursor-pointer p-2"
                  onClick={() =>
                    quantity < product.stock
                      ? setQuantity((current) => current + 1)
                      : setQuantity((current) => current)
                  }
                >
                  +
                </span>
                </h1>
            </div>
            <div className="flex justify-between items-center py-4">
              <Image
                className="p-2 border rounded-lg border-pink-400"
                src={product.thumbnail}
                alt=""
                width="150"
                height="150"
              />
              <h1>{product.title}</h1>
              <h1>{product.price}</h1>
            </div>
            
            <SheetFooter>
              <SheetClose asChild>
              <Button className="text-white bg-pink-600 w-full">
              <StepForward size={30} color="#ffffff" className="px-1" /> Buy Now
            </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
