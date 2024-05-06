import { createSlice } from "@reduxjs/toolkit";
import items from "../data/items";

const DEFAULT_ITEMS = items;

const ItemSlice = createSlice({
  name: "Item",
  initialState: DEFAULT_ITEMS,
  reducers: {
    additem: (store) => {
      return store;
    },
  },
});

export const Item = ItemSlice.actions;
export default ItemSlice;
