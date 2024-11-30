import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:[true,"Please Provide a Username"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please Provide a Email"]
    },
    password:{
        type:String,
        required:[true,"Please Provide a Password"]
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:String,
    verifyToken:String,
    VerifyTokenExpiry:Date
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User