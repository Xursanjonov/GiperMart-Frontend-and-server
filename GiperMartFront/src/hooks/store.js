import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./reducer/useAddCard";
import { setStorage } from "../lib/storage";

export const store = configureStore({
  reducer: {
    shopCard: cardReducer,
  },
});

store.subscribe(() => {
  setStorage('products', store.getState().shopCard.cards)
});
