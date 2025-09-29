import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
export const taskTable = mysqlTable("tasks_table", {
  id: serial().primaryKey(),
  task_name: varchar({ length: 255 }).notNull(),
});
