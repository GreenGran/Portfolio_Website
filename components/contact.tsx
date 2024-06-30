"use client"
import React from 'react'
import SectionHeading from './section-heading'

import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks'
import {sendEmail} from "./actions/sendEmail"
import toast from "react-hot-toast"

import Submit_btn from './submit_btn';

export default function Contact() {
  const {ref} =  useSectionInView("Contact")



  return (
    <motion.section ref={ref} id='contact' className='mb-28 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>
            Please contact me directly at <a className='underline' href='mailto:johnalmozlino@gmail.com'>johnalmozlino@gmail.com</a> or
            through this form 
        </p>

        <form action={ async formData => {
        const{data, error} = await sendEmail(formData)
        if(error){
          toast.error(error)
          return
        }
        toast.success("Email has been send, I will be in contact ASAP!")
        }}
           className='mt-10 flex flex-col dark:text-black'>
            <input name='senderEmail' type="email" required maxLength={500} placeholder='Your Email' className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' />
            <textarea name="message" id="" required maxLength={5000} placeholder='Your message' className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'></textarea>
            <Submit_btn />
        </form>
    </motion.section>
  )
}
