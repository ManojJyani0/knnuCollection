import { connnect } from "@/db";
import { getDataFromToken } from "@/lib/helper";
import { User } from "@/model/user.models";

import { NextRequest, NextResponse } from "next/server";


connnect();

export async function GET(request:NextRequest){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}