import addThemeReducer from "../slices/globalTheme";
import addEndpointReducer from "../slices/searchEndpoint";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    theme: addThemeReducer,
    searchEndpoint: addEndpointReducer,
  },
});
