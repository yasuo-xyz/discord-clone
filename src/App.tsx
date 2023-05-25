import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppSelector } from './app/hooks';

function App() {
  // ログインページを記述
  const user = useAppSelector((state) => state.user);
  // 仮置き記述
  // const user = null;

  return (
    <div className="App">
      {/* ユーザーがnullの時はログインページを見せるようにしていく */}
      {/* 参考演算で記述していく */}
      {/* ユーザー情報がある時の記述 */}
      {user ? (
        // trueの場合この中身を表示
        <>
          {/* サイドバーコンポーネント */}
          <Sidebar />

          {/* チャットコンポーネント */}
          <Chat />
        </>
      ) : (
        // falseの場合この中身を表示（今の場合だとnullに設定されてるのでこちらが表示される）
        <>
          {/* ログインコンポーネント */}
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
