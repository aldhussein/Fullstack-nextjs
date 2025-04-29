'use client';
import { API_URL } from '@/app/lib/config';
import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteTodo = ({todoId}: {todoId: string}) => {
    const router = useRouter();
    const handleDelete = async () => {

    

       try {
  

            const res = await fetch(`${API_URL}/api/todo/${todoId}`, {
              method: 'DELETE',
            });
      
            await res.json();
            router.refresh();
            
            console.log(res)
      
          }
      
          catch (e) {
            console.log(e)
          }
      

    }
  return (
    <div>
        <button 
        onClick={handleDelete}
        type='button'
        className='relative inline-flex items-center rounded-l-md bg-white
        px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset
        ring-gray-300 hover:bg-gray-50 focus:z-10'>
        Delete
        </button>
    </div>
  )
}

export default DeleteTodo