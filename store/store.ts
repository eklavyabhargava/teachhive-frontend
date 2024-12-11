"use client";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure the store with the combined reducers
const store = configureStore({
  reducer: rootReducer,
});

// Export RootState and AppDispatch types for type-safe usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
