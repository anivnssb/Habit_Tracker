import { db } from "@/db/db";
import { taskTable } from "@/model/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: { id: string };
}
export async function DELETE(request: NextRequest, { params }: Params) {
  const id = Number(params.id);
  await db.delete(taskTable).where(eq(taskTable.id, id));
  return NextResponse.json(
    { message: "Task Deleted Successfully!" },
    { status: 200 }
  );
}
