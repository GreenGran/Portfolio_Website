"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";

import { useSectionInView } from '@/lib/hooks';


export default function About() {
  const {ref} =   useSectionInView("About")


  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay:0.175}}
    id="about">
      
       <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After my service in the military has ended I decided to pursue my
        passion for programming, graduating with a diploma in{" "}
        <span className="font-medium">Practical Software Engineer</span>. I enrolled in a Full-Stack coding course,{" "}
        <span className="font-medium"> where I mastered web development, focusing on Front-end with ReactJS and Back-end with NodeJS, along with many other technologies.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB.<br />
        </span>
         I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">modding video games</span>. 
      </p>
    </motion.section>
  )
}
