import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./features/slices/SliderSlice";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

export default store;
