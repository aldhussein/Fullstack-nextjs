import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  await connectToTheDatabase();

  const { isDone } = await request.json();

  const updatedTodo = await TodoModel.findByIdAndUpdate(params.id, { isDone });

  return new Response(JSON.stringify(updatedTodo), { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  await connectToTheDatabase();

  const deletedTodo = await TodoModel.findByIdAndDelete(params.id);

  return new Response(JSON.stringify(deletedTodo), { status: 200 });
}
