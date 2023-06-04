import { channel } from 'diagnostics_channel';
import { ReactNode } from 'react';
// 型定義用ファイル
// ユーザーのイニシャルステートの型を指定
// エラー原因？
export interface InitialUserState {
    photo: string | undefined;
    displayName: ReactNode;
    uid: any;
    user: null | {
        // ユーザーidを定義
        uid: string;
        // ユーザーの写真（プロフィール写真）をフォトと定義
        photo: string;
        // メールアドレスを定義
        email: string;
        // 表示用（アカウント名とは別）の名前を定義
        displayName: string;
    };
}

export interface InitialChannelState {
    channelId: string | null;
    channelName: string | null;
}
