import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom';



export default function Submit_btn() {
    const  {pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className='group flex items-center justify-center gap-2  h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all  
    focus:scale-110 hover:scale-110  active:scale-105 hover:bg-gray-950 disabled:scaled-100 disabled:-opacity-65 dark:bg-white dark:bg-opacity-10'>
        {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white '></div> :
        (<>Submit < FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' /></>) }
    </button>
  )
}
