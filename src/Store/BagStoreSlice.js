import { createSlice } from "@reduxjs/toolkit";

const BagStore = createSlice({
  name: "Bag",
  initialState: [],
  reducers: {
    additem: (store, action) => {
      store.push(action.payload);
    },
    removeitem: (store, action) => {
      return store.filter((item) => item !== action.payload);
    },
  },
});

export const BagAction = BagStore.actions;
export default BagStore;
