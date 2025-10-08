import {
  mysqlTable,
  serial,
  varchar,
  json,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const taskTable = mysqlTable("tasks_table", {
  id: serial().primaryKey(),
  task_name: varchar({ length: 255 }).notNull(),
  frequency: mysqlEnum(["daily", "weekly"]).notNull(),
  completed_dates: json().default({ dates: [] } as { dates: string[] }),
});
