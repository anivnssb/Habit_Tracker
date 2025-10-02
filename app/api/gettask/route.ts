import { db } from "@/db/db";
import { taskTable } from "@/model/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const task = await db.select().from(taskTable);
  return NextResponse.json({ tasklist: task }, { status: 200 });
}
