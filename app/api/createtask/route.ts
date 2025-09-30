import { NextRequest } from "next/server";
import { db } from "../../../db/db";
import { taskTable } from "../../../model/schema";

export async function GET(request: NextRequest) {
  console.log(request);
  // const newTask: typeof taskTable.$inferInsert = {
  //   task_name: "study",
  //   frequency: 10,
  // };
  // await db.insert(taskTable).values(newTask);
  // console.log("New user created!");
}
