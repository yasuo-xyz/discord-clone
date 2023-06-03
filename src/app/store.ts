import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import channelReducer from "../features/userSlice";


// ストアを作成
export const store = configureStore({
    reducer: {
        user: userReducer,
        channel: channelReducer,
    },
});

// 型をエクスポート
// AppDispatchの部分の名前は何でもいい（分かりやすいのでいい）
// ここの記述はユーズディスパッチの型付きを用意する為
export type AppDispatch = typeof store.dispatch

// ルートステイトの型を用意
export type RootState = ReturnType<typeof store.getState>;