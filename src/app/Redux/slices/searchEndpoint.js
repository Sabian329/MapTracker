import { createSlice } from "@reduxjs/toolkit";

export const searchEndpointSlice = createSlice({
  name: "endpoint",
  initialState: {
    searching: "AIRFIELDS",
  },
  reducers: {
    switchEndpoint(state, action) {
      state.searching = action.payload;
    },
  },
});

export const { switchEndpoint } = searchEndpointSlice.actions;
export default searchEndpointSlice.reducer;
