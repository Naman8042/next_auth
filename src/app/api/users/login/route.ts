import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { NextRequest,NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request : NextRequest){
 try{
    const reqBody = await request.json()
    const {email,password} = reqBody;

    const user = await User.findOne({email})

    if(!user){
        return NextResponse.json({
            message:"User does Not exists"
        })
    }

    const validPassword = await bcrypt.compare(password,user.password)
    
    if(!validPassword){
        return NextResponse.json({
            message: "Please Check Your Credentials"
        })
    }

    const tokenData = {
        id:user._id,
        username:user.username,
        email:user.email
    }
    const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:'1d'})
    
    const response = NextResponse.json({
        message : "Logged In Success",
        success:true
    })

    response.cookies.set("token",token,{
        httpOnly : true
    })

    return response;

}
 catch(err:any){
    return NextResponse.json({message:err.message})
 }
}    