import { createSlice } from "@reduxjs/toolkit";
export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = { habits: [] };
export const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {},
});

export const {} = habitSlice.actions;

export default habitSlice.reducer;
