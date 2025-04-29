import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Todo from './Todo';
import { API_URL } from '@/app/lib/config';


export interface TodoItem {
    _id : string,
    title: string,
    isDone : boolean
}




export default async function Todos() {



    const res = await fetch(`${API_URL}/api/todo`, {cache: 'no-cache'});


    const todoList : TodoItem[] = await res.json();

    

    console.log(todoList)

    return (
        <div className='w-full my-10'>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Todos</CardTitle>
                    <CardDescription>Become Productive</CardDescription>
                </CardHeader>
                <CardContent>
                    <ul>
                        {
                            todoList.map((todo) => (
                               <Todo todo ={todo} key={todo._id}/>
                            ))
                        }
                    </ul>
                </CardContent>
                
            </Card>

        </div>
    )
}
