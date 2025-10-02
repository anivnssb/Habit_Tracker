import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db/db";
import { taskTable } from "../../../model/schema";

export async function POST(request: NextRequest) {
  console.log("printing request");
  const { task_name, frequency } = await request.json();
  const newTask: typeof taskTable.$inferInsert = { task_name, frequency };
  const task = await db.insert(taskTable).values(newTask);
  console.log(user);
  return NextResponse.json({ message: "New user created!" }, { status: 200 });
}
