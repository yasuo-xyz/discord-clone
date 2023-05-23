import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* コンポーネント */}
    <Provider store={store}>
      <App />
      {/* ラップ */}
    </Provider>
  </React.StrictMode>
);
