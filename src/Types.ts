// 型定義用ファイル
// ユーザーのイニシャルステートの型を指定
export interface InitialUserState {
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