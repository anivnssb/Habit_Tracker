import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/taskSlice";

export const makeStore = () => {
  return configureStore({ reducer: { tasks: taskReducer } });
};

export type TaskStore = ReturnType<typeof makeStore>;
export type TaskState = ReturnType<TaskStore["getState"]>;
export type TaskDispatch = TaskStore["dispatch"];
