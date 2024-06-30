"use client";

import React, { useState, createContext, useContext } from 'react';
import { links } from '@/lib/data';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProverderProps = {
    children : React.ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick : number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;

}
export const ActiveSectionContext = 
createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProverder({
    children,
}:ActiveSectionContextProverderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
   const [timeOfLastClick, setTimeOfLastClick ] = useState(0) // need to keep track of this to disable the obrerver temporaroly
  return (
    <ActiveSectionContext.Provider
    value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}
    >
    {children}
  </ActiveSectionContext.Provider>
  )
}



export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

if(context === null){
    throw new Error(
        "ActiveSectionContext must be used within ActiveSectionContextProverder"
    );
}

return context;

}