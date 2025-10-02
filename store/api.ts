// store/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Task {
  id: string;
  task_name: string;
  frequency: string;
  completed_date: string;
}

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ["Task"],
  endpoints: (build) => ({
    getTasks: build.query<{ tasklist: Task[] }, void>({
      query: () => `/gettask`,
      providesTags: (result) =>
        result
          ? [
              ...result.tasklist.map(({ id }) => ({
                type: "Task" as const,
                id,
              })),
              { type: "Task", id: "LIST" },
            ]
          : [{ type: "Task", id: "LIST" }],
    }),
    addTask: build.mutation<{ message: string }, Partial<Task>>({
      query: (newTask) => ({
        url: "/createtask",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
    deleteTask: build.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `/deletetask/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation } =
  taskApi;
