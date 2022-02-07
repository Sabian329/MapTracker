import addThemeReducer from "../slices/globalTheme";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    theme: addThemeReducer,
  },
});
