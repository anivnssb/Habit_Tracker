import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  name: string;
  frequency: string;
  completedDates: string[];
  createdAt: string;
}
interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = { tasks: [] };

const habitSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ name: string; frequency: string }>) {
      const newTask = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        completedDates: [""],
        name: action.payload.name,
        frequency: action.payload.frequency,
      };
      state.tasks.push(newTask);
    },
  },
});

export const { addTask } = habitSlice.actions;
export default habitSlice.reducer;
