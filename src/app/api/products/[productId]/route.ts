import { connnect } from '@/db'
import { Product } from '@/model/product.models'
import { NextResponse } from 'next/server'
connnect()


export async function GET(request: Request) {
    try {
        const { pathname } = new URL(request.url)
        const id = pathname.split("/")[pathname.split("/").length - 1];
        const product = await Product.findById(id);
        console.log(product)
        return NextResponse.json({ product },{status:200});
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}