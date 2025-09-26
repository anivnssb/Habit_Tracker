export type HabitFrequency = "daily" | "weekly";

export interface Habit {
  id: string;
  name: string;
  frequency: HabitFrequency;
  completedDates: string[];
  createdAt: string;
}
