import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskSlice";
import { taskApi } from "./api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(taskApi.middleware),
  });
};

export type TaskStore = ReturnType<typeof makeStore>;
export type TaskState = ReturnType<TaskStore["getState"]>;
export type TaskDispatch = TaskStore["dispatch"];
