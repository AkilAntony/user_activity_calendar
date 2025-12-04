import type { SelectedDateData } from '@/types/common';
import { createSlice, type PayloadAction} from '@reduxjs/toolkit';


interface CalendarState {
  selectedDateInfo: SelectedDateData | null;
}

const initialState: CalendarState = {
  selectedDateInfo: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDateInfo: (state, action: PayloadAction<SelectedDateData | null>) => {
      state.selectedDateInfo = action.payload;
    },
    clearSelectedDate: (state) => {
      state.selectedDateInfo = null;
    },
  },
});

export const { setSelectedDateInfo, clearSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;