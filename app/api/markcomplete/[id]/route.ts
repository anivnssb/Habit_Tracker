import { db } from "@/db/db";
import { taskTable } from "@/model/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function PUT(request: NextRequest, { params }: Params) {
  let { id } = await params;
  const { remove, date } = await request.json();
  console.log("remove", remove);
  const result = await db
    .select({ completed_dates: taskTable.completed_dates })
    .from(taskTable)
    .where(eq(taskTable.id, Number(id)));

  const { completed_dates } = result[0] as {
    completed_dates: { dates: string[] };
  };
  if (remove) {
    completed_dates.dates.splice(completed_dates.dates.length - 1, 1);
  }
  await db
    .update(taskTable)
    .set({
      completed_dates: {
        dates: remove
          ? completed_dates.dates
          : [...completed_dates.dates, date],
      },
    })
    .where(eq(taskTable.id, Number(id)));
  return NextResponse.json(
    { message: "Task Updated Successfully!" },
    { status: 200 }
  );
}
