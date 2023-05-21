// Slice（スライス）とは、State（ステート）、Reducer（リデューサー）、ActionCreator（アクションクリエイター）を同時に作れるものらしい
import { createSlice } from "@reduxjs/toolkit";

// ユーザースライスの役割としては、ユーザーのログイン、ログアウトを監視する為に作るもの
export const userSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        // ログイン、現在のユーザーをアクションペイロードで更新するとゆう記述
        // アクションペイロードとは、他のファイルでディスパッチとゆう操作が行わる
        // ディスパッチをする事で今のステートのユーザー状態が更新されるとゆう記述らしい
        login: (state, action) => {
            state.user = action.payload;
        },
        // ログアウト
        logout: (state) => {
            state.user = null;
        },
    }
});

export default userSlice.reducer;