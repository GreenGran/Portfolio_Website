"use server"
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import { Resend } from "resend"
import React from "react";
import ContactFormEmail from "./Email/contactFormEmail";
const resend = new Resend(process.env.RRESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");


   // console.log(senderEmail);
   // console.log(message);
    
   // server side validation
    if(!validateString(senderEmail,500)){
        return {
            error:"invailed sender Email"
        }
    }
    if(!validateString(message, 5000)){
        return {
            error:"invailed message"
        }
    }
let data;
try {
    data = await resend.emails.send({
        from: 'Contact From Website <onboarding@resend.dev>',
        to: "yoni13500@gmail.com",
        subject:"message from contact form",
        reply_to: senderEmail as string,
       // text: message as string
       react: React.createElement(ContactFormEmail, {
        message:message as string, 
        senderEmail: senderEmail as string})

    })
    } catch (error: unknown) {
   
        return{
            error: getErrorMessage(error)
           }
    }
   return {
    data,
   }
      
  }