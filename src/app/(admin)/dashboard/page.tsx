"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};
type FormDataI = {
  title: String;
  description: String;
  price: Number;
  discountPercentage: Number;
  rating: Number;
  stocke: Number;
  thumbnail: String;
  images: Array<String>;
};

export default function Dashboard({}: Props) {
  const [formData, setFormData] = useState<FormDataI>({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stocke: 0,
    thumbnail: "",
    images: [],
  });
  const [thumbnail, setThumbnail] = useState<any>(null);//File| null
  const [images, setImages] = useState<any>(null);//File[] | null
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }
  async function handleSubmit() {
    const bodyData = new FormData();

    try {
      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("rendred");
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-4xl font-bold text-pink-600 mb-2 font-Rubik mt-8">
        Add Product
      </h1>
      <Input
        onChange={handleChange}
        className="my-3"
        name="title"
        type="text"
        placeholder="Item title"
      />
      <Input
        onChange={handleChange}
        className="my-3"
        name="discription"
        type="text"
        placeholder="Enter item discription"
      />
      <Input
        onChange={handleChange}
        className="my-3"
        name="price"
        type="number"
        placeholder="Enter item price"
      />
      <Input
        onChange={handleChange}
        className="my-3"
        name="discountPercentage"
        type="number"
        placeholder="Enter discountPercentage"
      />
      <Input
        onChange={handleChange}
        className="my-3"
        name="rating"
        type="number"
        placeholder="Enter base rating"
      />
      <Input
        onChange={handleChange}
        className="my-3"
        name="stoke"
        type="number"
        placeholder="Enter Stoke"
      />
      <select>
        <option> Sadi</option>
        <option> shoot</option>
        <option> Gagra</option>
      </select>
      <Input
      // eslint-disable-next-line
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setThumbnail(e?.target?.files)}
        className="my-3"
        name="thumbnail"
        type="file"
        accept="image/*"
      />
      <Input
      // eslint-disable-next-line
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setImages(e.target.files)}
        className="my-3"
        name="images"
        type="file"
        multiple={true}
        accept="image/*"
      />

      <Button
        onClick={handleSubmit}
        variant={"default"}
        color="pink"
        className="my-3 bg-pink-500 w-full"
      >
        UPLOAD PRODUCT
      </Button>
      <Link href={"/login"} className="text-sm mx-4">
        {" "}
        Allredy have a Account? <span className="text-pink-600">
          Login
        </span>{" "}
      </Link>
    </div>
  );
}
