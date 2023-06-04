import React from 'react'
import "./Chat.scss";
import ChatHeader from './ChatHeader';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './ChatMessage';
import { useAppSelector } from '../../app/hooks';

const Chat = () => {
  const channelName = useAppSelector((state) => state.user.user);

  return (
    <div className="chat">
    {/* チャットヘッダー（コンポーネント） */}
    {/* エラー文を解決中 */}
    <ChatHeader channelName={channelName} />
    {/* チャットメッセージ */}
    <div className="chatMessage">
      {/* チャットメッセージ（コンポーネント） */}
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
    {/* チャットインポート */}
    <div className="chatInput">
      {/* アイコンをインポート */}
      <AddCircleOutlineIcon />
      {/* ホームタグを用意 */}
      <form>
        <input type="text" placeholder="#仮置きへのメッセージを送信" />
        {/* チャットインプットボタン（型） */}
        <button type="submit" className="chatInputButton">
          送信
        </button>
      </form>

      {/* チャットインプットアイコンズ（型） */}
      {/* この中にはGIFとかを用意する */}
      <div className="chatIputIcons">
        <CardGiftcardIcon />
        <GifIcon />
        <EmojiEmotionsIcon />
      </div>
    </div>
    </div>
  )
}

export default Chat