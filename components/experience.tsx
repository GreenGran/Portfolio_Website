"use client"

import React, { useEffect,useRef, useState }  from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSectionInView } from '@/lib/hooks'
import { experiencesData } from '@/lib/data'
import { useTheme } from '@/app/context/theme-context';

export default function Experience() {
    const {ref, inView} =  useSectionInView("Experience",0.3);
    const [inViewOnce, setInViewOnce] = useState<boolean>(false);

    const { theme }  =  useTheme()
    const hasRunRef = useRef(false);
   

  

  useEffect(() => {// this is so the animation for the expirince will only place once and will not glich out 
      if (inView && !hasRunRef.current) {
        setInViewOnce(true) ;
          hasRunRef.current = true;
      }
  }, [inView]);


    
    
  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading  >My Experience</SectionHeading>
        <VerticalTimeline lineColor="">

          {
           
            experiencesData.map((Item, index) => (
                <React.Fragment key = {index} >
                <VerticalTimelineElement visible={inViewOnce}  // fix this later so it will only happen once, and add a delay so they come in one by one
                contentStyle={{
                  background:
                      theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                    boxShadow:'none',
                    border:'1px solid rgba(0, 0, 0, 0.05)',
                    textAlign:'left',
                    padding: '1.3rem 2rem',
                }}


           


                contentArrowStyle={{
                    borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.15)",
                }}
                date={Item.date}
                icon={Item.icon}
                iconStyle={{
                    background:theme === "light" ? "white" : "rgba(255, 255, 255, 0.5)",
                    fontSize: '1.5rem',
                    
                }}
                >
                    <h3 className='font-semibold capitalize'>{Item.title} </h3>
                    <p className='font-normal !mt-0' >{Item.location}</p>
                    <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{Item.description}</p>
                    <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{Item.link ? <a href={Item.link} target="_blank" >{Item.link}</a>:  null}</p>
                   
                </VerticalTimelineElement>
                </React.Fragment>
            ))
          }
        </VerticalTimeline>
    </section>
  )
}
