import Image from "next/image";
import ToDoForm from "./_components/todo/ToDoForm";
import Todos from "./_components/todo/Todos";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col max-w-lg mx-auto mt-32">
     {/* to do form */}
     <ToDoForm/>
     <Todos/>
    </main>
  );
}
