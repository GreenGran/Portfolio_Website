import { useActiveSectionContext } from '@/app/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import React , { useRef, useEffect }from "react"
import type { SectionName } from '@/lib/types';




export function useSectionInView(sectionName: SectionName, threshold = 0.75){


    const {ref, inView} = useInView({
        threshold,
      });
      const { setActiveSection, timeOfLastClick} = useActiveSectionContext()
    
      useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection(sectionName)
        }
        
      }, [inView, setActiveSection, timeOfLastClick, sectionName]);

      return {
        ref,
        inView,
      }
}