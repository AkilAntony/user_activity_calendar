import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./slices/calendarSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["calendar/setSelectedDateInfo"],
        ignoredPaths: ["calendar.selectedDateInfo.date"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
