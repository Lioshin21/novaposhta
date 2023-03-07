import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import officesReducer from "./slicers/officesSlicer";
import trackingReducer from "./slicers/trackingSlicer";

export const store = configureStore({
  reducer: {
    offices: officesReducer,
    tracking: trackingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
