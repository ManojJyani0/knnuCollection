
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connnect } from "@/db";
import { User } from "@/model/user.models";

connnect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, mobile, password} = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({mobile})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        // const salt = await bcryptjs.genSalt(10)
        // const hashedPassword = await bcryptjs.hash(password, 10)

        const newUser = new User({
            username,
            mobile,
            password,
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification mobile

        // await sendOTP({mobile, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}