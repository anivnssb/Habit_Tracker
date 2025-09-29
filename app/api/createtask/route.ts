import { NextRequest } from "next/server";
import { db } from "../../../db/db";
import { taskTable } from "../../../model/schema";

export async function GET(request: NextRequest) {
  const newTask: typeof taskTable.$inferInsert = {
    task_name: "study",
  };
  await db.insert(taskTable).values(newTask);
  console.log("New user created!");
}
