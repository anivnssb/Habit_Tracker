import { db } from "@/db/db";
import { taskTable } from "@/model/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}
export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;
  await db.delete(taskTable).where(eq(taskTable.id, Number(id)));
  return NextResponse.json(
    { message: "Task Deleted Successfully!" },
    { status: 200 }
  );
}
