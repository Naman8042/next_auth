import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { NextRequest,NextResponse } from 'next/server'

connect()

export async function POST(request : NextRequest){
    try{
        const reqBody = await request.json()
        const {token} = reqBody;
        console.log(token)

        const user = await User.findOne({VerifyToken:token,
            VerifyTokenExpiry:{$gt:Date.now()}
        })
        
        if(!user){
            return NextResponse.json({message:"invalid token"})
        }
        console.log(user);

        user.isVerified = true;
        user.verifyToken = undefined; 
        user.verifyTokenExpiry = undefined; 

        await user.save()

        return NextResponse.json({
            message:"email Verified Sucessfully"
        })
    }
    catch(err:any){
        return NextResponse.json({error:err.message})
    }
}
