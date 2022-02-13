import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import creditCounterReducer from "../features/credit-counter/creditCounterSlice";

export const store = configureStore({
  reducer: {
    counter: creditCounterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
