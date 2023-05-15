import React from 'react'
import "./Chat.scss";
import ChatHeader from './ChatHeader';

const Chat = () => {
  return (
    <div className="chat">
    {/* チャットヘッダー */}
    <ChatHeader />
    {/* チャットメッセージ */}
    <div className="chatMessage"></div>
    {/* チャットインポート */}
    <div className="chatInput"></div>
    </div>
  )
}

export default Chat