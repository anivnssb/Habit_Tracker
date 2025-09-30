import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../db/db";
import { taskTable } from "../../../model/schema";

export async function POST(request: NextRequest) {
  console.log("printing request");
  const result = await request.json();
  console.log(result);
  return NextResponse.json({ message: "api call successful" }, { status: 200 });
  // const newTask: typeof taskTable.$inferInsert = {
  //   task_name: "study",
  //   frequency: 10,
  // };
  // await db.insert(taskTable).values(newTask);
  // console.log("New user created!");
}
