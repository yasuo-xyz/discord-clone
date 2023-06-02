// Slice（スライス）とは、State（ステート）、Reducer（リデューサー）、ActionCreator（アクションクリエイター）を同時に作れるものらしい
import { createSlice } from "@reduxjs/toolkit";
import { InitialChannelState } from "../Types";
import { channel } from 'diagnostics_channel';

// TypesファイルからインポートしたInitialUserStateをinitialStateで設定
const initialState:  InitialChannelState = {
    channelId: null,
    channelName: null,
};

// ユーザースライスの役割としては、ユーザーのログイン、ログアウトを監視する為に作るもの
export const channelSlice = createSlice({
    name: "channel",
    // 読み：イニシャルステート
    initialState,
    // アクションズも自動的に生成される&発火
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        }
    }
});

export const { setChannelInfo } = channelSlice.actions
export default channelSlice.reducer;