import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// ストアを作成
export const store = configureStore({
    reducer: userReducer,
})