import { createSlice } from "@reduxjs/toolkit";

export const globalThemeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: true,
    isSatelite: false,
  },
  reducers: {
    switchTheme(state, action) {
      state.isDarkTheme = action.payload;
    },
    setSatleite(state, action) {
      state.isSatelite = action.payload;
    },
  },
});

export const { switchTheme, setSatleite } = globalThemeSlice.actions;
export default globalThemeSlice.reducer;
