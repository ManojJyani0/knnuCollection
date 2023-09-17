import { connnect } from "@/db";
import { User } from "@/model/user.models";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


connnect()
export async function POST(request: NextRequest){
    try {
        
        const reqBody = await request.json()
        const {mobile, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({mobile})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        //check if password is correct
        console.log(user)
        const isMatch = await user.isPasswordCorrect(password);
        console.log({isMatch})
        if(!isMatch){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(user);
        
        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            mobile: user.mobile
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}