import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./features/habitSlice";

export const makeStore = () => {
  return configureStore({ reducer: { habits: habitReducer } });
};

export type HabitStore = ReturnType<typeof makeStore>;
export type HabitState = ReturnType<HabitStore["getState"]>;
export type HabitDispatch = HabitStore["dispatch"];
