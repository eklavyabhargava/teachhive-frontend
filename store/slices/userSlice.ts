import { createSlice } from "@reduxjs/toolkit";

interface userState {
  user: { name: string; emailId: string } | null;
  isUserLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: userState = {
  user: null, // Default user state
  isUserLoggedIn: true,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user; // update user state
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
    clearUser: (state) => {
      state.user = null; // clear user data
      state.isUserLoggedIn = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
