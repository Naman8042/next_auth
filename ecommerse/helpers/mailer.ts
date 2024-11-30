import nodemailer from 'nodemailer'
import User from '../models/userModels'
import bcrypt from 'bcryptjs'

export const sendEmail = async({email,emailType,userId}:any)=>{
    try{
        const hashToken = await bcrypt.hash(userId.toString(),10)
        if(emailType=='Verify'){
            await User.findByIdAndUpdate(userId,{
                $set:{
                    verifyToken:hashToken,
                    verifyTokenExpiry:Date.now()+3600000
                }
            })
        }
        else if(emailType=='Reset'){
            await User.findByIdAndUpdate(userId,{
                $set:{
                    forgotPasswordToken:hashToken,
                    forgotPasswordTokenExpiry:Date.now()+3600000
                }
            })
        }
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "d24f6f1ea70ffd",
              pass: "411933e34d5071"
            }
          });
            
            const mailOptions = {
              from: 'namansharma8042@gmail.com', 
              to: email, 
              subject: emailType==='Verify'? "Verify Your Passowrd":"Reset Your Password", // Subject line
              text: "Hello world?", // plain text body
              html: "<b>Verify Passwprd</b>", // html body
            }
          const mailResponse = await transport.sendMail(mailOptions)
          console.log(mailResponse)
          return mailResponse;
    }
    catch(err:any){
        console.log(err)
    }
}