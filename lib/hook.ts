import { useDispatch, useSelector, useStore } from "react-redux";
import type { HabitState, HabitDispatch, HabitStore } from "./store";

export const useHabitDispatch = useDispatch.withTypes<HabitDispatch>();
export const useHabitSelector = useSelector.withTypes<HabitState>();
export const useHabitStore = useStore.withTypes<HabitStore>();
