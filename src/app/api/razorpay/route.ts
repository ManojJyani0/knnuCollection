import { data } from "autoprefixer";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import uuid4 from "uuid4";

export async function POST(){
        // Initialize razorpay object
        const razorpay = new Razorpay({
          key_id: process.env.RAZORPAY_KEY!,
          key_secret: process.env.RAZORPAY_SECRET,
        });
        // todo create mongodb order 

        const amount = 499;
        const currency = "INR";
        const options = {
          amount: (amount * 100),
          currency,
          receipt: uuid4(),
        };
        razorpay.orders.create(options, function(err, order) {
          if(err){
            console.log(err)
            return NextResponse.json(err)
          }
          console.log(order)
            return NextResponse.json({nae:"Manoj Jyani"})
        });
    }