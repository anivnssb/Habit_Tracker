import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { taskTable } from "@/model/schema";

export async function POST(request: NextRequest) {
  const { task_name, frequency } = await request.json();
  const newTask: typeof taskTable.$inferInsert = { task_name, frequency };
  await db.insert(taskTable).values(newTask);
  return NextResponse.json({ message: "New Task created!" }, { status: 200 });
}
