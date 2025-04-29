import connectToTheDatabase from "@/app/lib/db";
import TodoModel from "@/app/models/todoModel";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: {
    id: string;
  };
};

export async function PUT(req: NextRequest, context: RouteContext) {
  await connectToTheDatabase();

  const { id } = context.params;
  const isDone = await req.json();

  const updatedTodo = await TodoModel.findByIdAndUpdate(id, { isDone });

  return NextResponse.json(updatedTodo, { status: 201 });
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  await connectToTheDatabase();

  const { id } = context.params;
  const deletedTodo = await TodoModel.findByIdAndDelete(id);

  return NextResponse.json(deletedTodo, { status: 201 });
}
