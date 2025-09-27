import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";

export const useHabitDispatch = useDispatch.withTypes<AppDispatch>();
export const useHabitSelector = useSelector.withTypes<RootState>();
export const useHabitStore = useStore.withTypes<AppStore>();
