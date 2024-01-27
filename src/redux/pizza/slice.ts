import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Pizza, PizzaSliceState, Status } from "./types";
import { fetchPizzas } from "./asyncActions";

export  const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING
};
  
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = [];
    })
  }
});

export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
