import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: string;
  completedDates: string[];
  createdAt: string;
}
export interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = { habits: [] };

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit(
      state,
      action: PayloadAction<{ name: string; frequency: string }>
    ) {
      const newHabit = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        completedDates: [""],
        name: action.payload.name,
        frequency: action.payload.frequency,
      };
      state.habits.push(newHabit);
    },
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
