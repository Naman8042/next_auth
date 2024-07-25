import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"Please Provide a username"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Please Provide a email"]
    },
    password:{
        type:String,
        required:[true,"Please Provide a password"]
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
    forgotPasswordTokenExpiry:Date,
    VerifyToken:String,
    VerifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User