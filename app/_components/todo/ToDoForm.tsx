'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { title } from 'process'
import { json } from 'stream/consumers'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/app/lib/config'

function ToDoForm() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {

    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const data = {

      title: formData.get('title')

    }

    try {

      const res = await fetch(`${API_URL}/api/todo`, {
        method: 'POST',
        body: JSON.stringify(data)
      });

      await res.json();
      router.refresh();
      form.reset();
      console.log(res)

    }

    catch (e) {
      console.log(e)
    }




  }


  return (

    <form className='w-full'
      onSubmit={handleSubmit}>

      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name='title' placeholder="Title of your todo" />
        </div>
        <div className="flex flex-col space-y-1.5">


        </div>
      </div>
    </form>

  )
}

export default ToDoForm