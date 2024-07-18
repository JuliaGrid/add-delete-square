import { createReducer } from "@reduxjs/toolkit";
import { addSquare, deleteSquare } from "./action";
import { InitalState } from "./interfaces";

const initialState: InitalState = {
  squares: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addSquare, (state, action) => {
       state.squares = [action.payload, ... state.squares]
    })
    .addCase(deleteSquare, (state) => {
      const lastIndex = state.squares.length - 1;
      state.squares = state.squares.filter((_, index) => index !== lastIndex);
    })
});

export { reducer };
