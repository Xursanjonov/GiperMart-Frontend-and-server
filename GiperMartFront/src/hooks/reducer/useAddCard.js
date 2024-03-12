import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cards: [],
  count: 0,
};

export const cardAddReducer = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    },
    delet: (state, action) => {
      console.log(action.payload);
      
      return {
        ...state,
        cards: [...state?.cards?.filter((item)=> item.id !== action.payload.id)],
      };
    },
  },
});

export const { add, delet } = cardAddReducer.actions;
export const cardReducer = cardAddReducer.reducer;
