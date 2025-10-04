import { formatDate } from "@/utils/functions";
import { db } from "@/db/db";
import { taskTable } from "@/model/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(request: NextRequest, { params }: Params) {
  let { id } = await params;
  let taskId = Number(id);

  const result = await db
    .select({ completed_dates: taskTable.completed_dates })
    .from(taskTable)
    .where(eq(taskTable.id, taskId));

  const { completed_dates } = result[0] as {
    completed_dates: { dates: string[] };
  };

  const formattedDate = formatDate(new Date());
  await db
    .update(taskTable)
    .set({
      completed_dates: { dates: [...completed_dates.dates, formattedDate] },
    })
    .where(eq(taskTable.id, taskId));
  return NextResponse.json(
    { message: "Task Updated Successfully!" },
    { status: 200 }
  );
}
