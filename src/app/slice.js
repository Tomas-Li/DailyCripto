import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navbarKey: []
}

export const navbarKeySlice = createSlice({
  name: 'navbarKey',
  initialState,
  reducers: {
    navbarChange: (state, key) => {
      state.navbarKey = [key]
    }
  }
})

export const { navbarChange } = navbarKeySlice.actions;

export default navbarKeySlice.reducer;