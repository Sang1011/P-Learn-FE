import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  bookings: string[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking(state, action: PayloadAction<string>) {
      state.bookings.push(action.payload);
    },
    removeBooking(state, action: PayloadAction<string>) {
      state.bookings = state.bookings.filter(id => id !== action.payload);
    },
    clearBookings(state) {
      state.bookings = [];
    },
  },
});

export const { addBooking, removeBooking, clearBookings } = bookingSlice.actions;
export default bookingSlice.reducer;