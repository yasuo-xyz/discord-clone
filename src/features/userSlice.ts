// Slice（スライス）とは、State（ステート）、Reducer（リデューサー）、ActionCreator（アクションクリエイター）を同時に作れるものらしい
import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "../Types";

// TypesファイルからインポートしたInitialUserStateをinitialStateで設定
const initialState:  InitialUserState = {
    user: null,
    photo: undefined,
    displayName: undefined,
    uid: undefined
}

// ユーザースライスの役割としては、ユーザーのログイン、ログアウトを監視する為に作るもの
export const userSlice = createSlice({
    name: "user",
    // 読み：イニシャルステート
    initialState,
    // アクションズも自動的に生成される
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
// console.log(userSlice);

export const { login, logout } = userSlice.actions
export default userSlice.reducer;