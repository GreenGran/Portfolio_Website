"use client"
import React, { useState, useEffect , createContext, useContext} from 'react'

type Theme = "light" | "dark"
type ThemeContextProviderProps = {
    children: React.ReactNode;
}
type ThemeContectType = {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContect = createContext<ThemeContectType | null>(null)
export default function ThemeContextProvider({
    children,
}: ThemeContextProviderProps) {

    const [theme, setTheme ]  = useState<Theme>("light")

    const  toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark");
        }else{
            setTheme("light");
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
     const localTheme = window.localStorage.getItem('theme') as Theme | null ;
    if(localTheme){
        setTheme(localTheme);
        if(localTheme === "dark"){
            document.documentElement.classList.add("dark");
        }


    }else if(window.matchMedia("(prefers-color-scheme: dark)").matches)
        {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }

    }, [])

  return (
    <ThemeContect.Provider  value={{
        theme,
        toggleTheme
        }}>
        {children}
    </ThemeContect.Provider>
  )
}

export function useTheme() {
    const context = useContext(ThemeContect);

    if(context === null){
        throw new Error("useTheme cannot be NULL");
        
    }
    return context;
}

