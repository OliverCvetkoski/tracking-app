import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [
    { id: 1, status: "Delivered", datetime: "2024-08-25T10:00:00Z" },
    { id: 2, status: "Customs", datetime: "2024-08-26T12:00:00Z" },
    { id: 3, status: "City", datetime: "2024-08-27T14:00:00Z" },
    { id: 4, status: "Delivered", datetime: "2024-08-28T16:00:00Z" },
    { id: 5, status: "Country", datetime: "2024-08-29T16:00:00Z" },
    { id: 6, status: "Shipped", datetime: "2024-08-29T16:00:00Z" },
  ],
  currentIndex: 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    nextOrder: (state) => {
      if (state.currentIndex < state.orders.length - 1) {
        state.currentIndex += 1;
      }
    },
    previousOrder: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
      }
    },
  },
});

export const { nextOrder, previousOrder } = orderSlice.actions;

export default orderSlice.reducer;
