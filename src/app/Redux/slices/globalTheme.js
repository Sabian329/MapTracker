import { createSlice } from "@reduxjs/toolkit";

export const globalThemeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: true,
  },
  reducers: {
    switchTheme(state, action) {
      state.isDarkTheme = action.payload;
    },
  },
});

export const { switchTheme } = globalThemeSlice.actions;
export default globalThemeSlice.reducer;
