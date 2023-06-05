import { configureStore } from "@reduxjs/toolkit";
import NameSlice from "./Slice/NameSlice";

const Store = configureStore({
  reducer: {
    name: NameSlice,
  },
});

export default Store;
