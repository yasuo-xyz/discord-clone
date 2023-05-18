import React from 'react'
import "./ChatMessage.scss";
import { Avatar } from "@mui/material";

const ChatMessage = () => {
  return <div className="message">
    <Avatar />
    {/* メッセージインフォ（型） */}
    <div className="messageInfo">
      <h4>
        Shin Code
        {/* メッセージタイムスタンプ（型） */}
        <span className="messageTimestamp">2023/5/18</span>
        </h4>

        {/* ここがメッセージ本文になる */}
        <p>メッセージ本文</p>
    </div>
  </div>
}

export default ChatMessage