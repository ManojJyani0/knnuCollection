import { connnect } from "@/db";
import { getDataFromToken } from "@/lib/helper";
import { Address } from "@/model/address.models";

import { NextRequest, NextResponse } from "next/server";


connnect();

export async function POST(request: NextRequest) {
    try {
        const owner = await getDataFromToken(request);
        const { addressLine1, addressLine2, pincode, city, state, country } = await request.json()
        const address = await Address.create({
            addressLine1,
            addressLine2,
            city,
            country,
            owner,
            pincode,
            state,
        });
        return NextResponse.json({
            message: "Address added successfully",
            success: true,
            address
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    try {
        const owner = await getDataFromToken(request);
        const address = await Address.find({ owner })
        return NextResponse.json({
            success: true,
            address
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json()
        const address = await Address.deleteOne({ _id: id })
        return NextResponse.json({
            message: "Address removed Successfully",
            success: true,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}