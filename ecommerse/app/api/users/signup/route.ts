import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModels'
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request:NextRequest) {
    try{
        const reqBody = await request.json()
        
        if(!reqBody){
            return NextResponse.json({
                message:"req Body not found"
            })
        }
        const {userName,email,password} = reqBody;
        console.log(reqBody)

        const user = await User.findOne({email:email})
        if(user){
            return NextResponse.json({
                message:"User already exits"
            }
            )
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User ({
            userName,email,password:hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        await sendEmail({email,emailType:'Verify',userId:savedUser._id})

        return NextResponse.json({
            message:"User registed Successfully",
            success:true,
            savedUser
           })
    }
    catch(err:any){
        console.log(err)
    }
}