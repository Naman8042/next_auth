import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from 'next/server'

connect()

export async function GET(request : NextRequest){
 try{
    const response = NextResponse.json({
        message:"Logout SuccessFully"
    })
    response.cookies.set("token","",{
        httpOnly:true,
        expires:new Date(0)
    })

    return response

  }
 catch(err:any){
    return NextResponse.json({message:err.message})
 }
}    