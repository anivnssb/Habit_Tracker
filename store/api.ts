// store/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Task {
  id: string;
  task_name: string;
  frequency: string;
  completed_date: string;
}

// Define a service using a base URL and expected endpoints
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
    addTask: build.mutation<Task, Partial<Task>>({
      query: (newTask) => ({
        url: "/createtask",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTasksQuery, useAddTaskMutation } = taskApi;
