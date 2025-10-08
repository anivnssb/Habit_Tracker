import { NextRequest, NextResponse } from "next/server";
import { taskTable } from "@/model/schema";
import { createTask } from "@/db/task";

export async function POST(request: NextRequest) {
  const { task_name, frequency } = await request.json();
  const newTask: typeof taskTable.$inferInsert = { task_name, frequency };
  await createTask(newTask);
  return NextResponse.json({ message: "New Task created!" }, { status: 200 });
}
