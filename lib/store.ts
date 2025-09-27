import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./features/habitSlice";

export const makeStore = () => {
  return configureStore({ reducer: { habitReducer } });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
