import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Habit, HabitFrequency } from "../types/type";

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = { habits: [] };
export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: HabitFrequency }>
    ) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        frequency: action.payload.frequency,
        completedDates: [],
        name: action.payload.name,
      };
      state.habits.push(newHabit);
    },
  },
});

export const { addHabit } = habitSlice.actions;

export default habitSlice.reducer;
