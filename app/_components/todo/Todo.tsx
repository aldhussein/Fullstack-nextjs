import React from 'react'
import { TodoItem } from './Todos'
import DoneTodo from './DoneTodo'
import DeleteTodo from './DeleteTodo'

interface TodoProps {
    todo: TodoItem
}

export default function Todo({todo}: TodoProps) {
  return (
    <div>
        <ul className='flex justify-between gap-x-6 py-5'>

            <div className='flex min-w-0 gap-x-4'>

            <p className= {`text-md text-lg font-semibold leading-6 text-gray-900
                ${todo.isDone && 'line-through'}`}>
              {todo.title}
            </p>

            </div>

            <div className='flex'>
             <span className='isolate inline-flex rounded-md shadow-sm'>
               <DoneTodo todoId ={todo._id} isDone = {todo.isDone}/>
               <DeleteTodo todoId ={todo._id} />
             </span>
            </div>

        </ul>
    </div>
  )
}

// echo "# Fullstack-nextjs" >> README.md
// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/aldhussein/Fullstack-nextjs.git
// git push -u origin main 

