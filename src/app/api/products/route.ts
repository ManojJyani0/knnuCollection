
import { NextRequest, NextResponse } from "next/server";
import { connnect } from "@/db";
import { Product } from "@/model/product.models";

connnect()

export async function POST(request: NextRequest, response: NextResponse) {
    const data =await request.json()
    console.log(data)
  return new NextResponse("Thank you")
}

export async function GET(request:NextRequest){
    try {
        const products = await Product.find();
        return NextResponse.json({
            success:true,
            data: products
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}