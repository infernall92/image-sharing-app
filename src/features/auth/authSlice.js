import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  email: "",
  username: "",
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
