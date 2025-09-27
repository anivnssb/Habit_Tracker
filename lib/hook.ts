import { useDispatch, useSelector, useStore } from "react-redux";
import type { TaskState, TaskDispatch, TaskStore } from "./store";

export const useTaskDispatch = useDispatch.withTypes<TaskDispatch>();
export const useTaskSelector = useSelector.withTypes<TaskState>();
export const useTaskStore = useStore.withTypes<TaskStore>();
