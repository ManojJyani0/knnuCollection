"use client";
import { Button } from "@/components/ui/button";
import { RemoveFormCart, cartSelector } from "@/features/Product/Slice";
import { CartT, ProductT } from "@/interfaces";
import { Product } from "@/model/product.models";
import { AppDispatch } from "@/store";
import axios from "axios";
import { ArrowRight, StepForward } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

// const fetchProductByCartProduct = (): ProductT[] => {
//   // const response = await axios.get("https://dummyjson.com/products");
//   const data = require("../../dummy.json");
//   return data.products.splice(0, 6) as ProductT[];
// };
export default function Cart({}: Props) {
  // const makePayment = async () => {
  //   console.log("here...");
  //   const res = await initializeRazorpay();
  //   if (!res) {
  //     alert("Razorpay SDK Failed to load");
  //     return;
  //   }
  //   // Make API call to the serverless API
  //   const data = await fetch("/api/razorpay", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((t) => t.json())
  //     .catch((e) => alert(JSON.stringify(e)));
  //   alert(JSON.stringify(data));
  //   var options = {
  //     key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
  //     currency: data.currency,
  //     amount: data.amount,
  //     order_id: data.id,
  //     description: "Thankyou for your test donation",
  //     image: "https://manuarora.in/logo.png",
  //     handler: function (response: any) {
  //       // Validate payment at server - using webhooks is a better idea.
  //       alert(response.razorpay_payment_id);
  //       alert(response.razorpay_order_id);
  //       alert(response.razorpay_signature);
  //     },
  //     prefill: {
  //       name: "",
  //       email: "manuarorawork@gmail.com",
  //       contact: "9999999999",
  //     },
  //   };
  //   var rzp1 = new Razorpay(options);
  //   rzp1.on("payment.failed", function (response) {
  //     alert(response.error.code);
  //     alert(response.error.description);
  //     alert(response.error.source);
  //     alert(response.error.step);
  //     alert(response.error.reason);
  //     alert(response.error.metadata.order_id);
  //     alert(response.error.metadata.payment_id);
  //   });
  //   rzp1.open();
  // };
  // const initializeRazorpay = () => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //     // document.body.appendChild(script);

  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };
  const cartProduct = useSelector(cartSelector)|| [];
  const dispatch = useDispatch<AppDispatch>()
  
  const router = useRouter();

  return (
    <div className="px-5 flex flex-col justify-center pb-12">
      <h1 className="inline-flex items-center justify-center text-3xl ">
        Shopping Cart
      </h1>
      {cartProduct &&
        cartProduct.map((item) => (
          <div key={item._id} className="flex justify-between items-center py-4 border-y">
            <div className="flex space-x-2 items-center">
              <Image
                className="p-2 border rounded-lg border-pink-400"
                src={item.thumbnail}
                alt=""
                width="150"
                height="150"
              />
            </div>
            <div className="w-full mx-2">
              <div className="flex justify-between items-center w-full">
                <h1>{item.title}</h1>
                <h1 className="pr-5"> {item.quantity}</h1>
              </div>
              
              <div className="flex justify-between items-center w-full">
                <h1>{item.category}</h1>
                <h1 className="pr-5"> ₹ {item.price}/pices</h1>
              </div>
              <div className="flex justify-between items-center">
                <h1>{item.stock ? "in Stocke " : "Out of Stock"}</h1>
                <h1 className="text-red-700"
                  onClick={()=>dispatch(RemoveFormCart(item._id))}
                >Remome</h1>
              </div>
            </div>
          </div>
        ))}
      <div className="border border-pink-400 p-5 rounded-2xl my-4">
        <div className="flex justify-between items-center">
          <h1 className="text-lg">Subtotal</h1>
          <h1 className="text-lg">
            ₹{" "}
            {cartProduct.reduce(
              (total, crrentvalue) => crrentvalue.price* crrentvalue.quantity! + total,
              0
            )}
          </h1>
        </div>
        <p className="text-sm text-gray-400">
          Shipping and taxes will be calculated at checkout.
        </p>
        <Button
          className="text-white bg-pink-600 w-full mt-3 "
          onClick={()=>router.push("/")}
        >
          Chackout
        </Button>
      </div>

      <p className="px-5 inline-flex justify-center items-center">
        {" "}
        or{" "}
        <span className="px-5 text-pink-600" onClick={() => router.push("/")}>
          Continue Shopping{" "}
        </span>
        <ArrowRight size={20} color="pink" />
      </p>
    </div>
  );
}
