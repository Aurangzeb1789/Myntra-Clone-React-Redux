import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemsSlice";
import BagStore from "./BagStoreSlice";

const MyntraStore = configureStore({
  reducer: {
    Items: ItemSlice.reducer,
    Bag: BagStore.reducer,
  },
});

export default MyntraStore;
