import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from "./ErrorFallBack";

function App() {
  // ログインページを記述
  const user = useAppSelector((state) => state.user.user);
  // 仮置き記述
  // const user = null;

  const dispatch = useAppDispatch();

  // useEffectとは、発火のタイミングを決める事が出来るフックス
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            // ここの中身はペイロード（情報）して設定している
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {/* ユーザーがnullの時はログインページを見せるようにしていく */}
      {/* 参考演算で記述していく */}
      {/* ユーザー情報がある時の記述 */}
      {user ? (
        // trueの場合この中身を表示
        <>
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            {/* サイドバーコンポーネント */}
            <Sidebar />
          </ErrorBoundary>

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
