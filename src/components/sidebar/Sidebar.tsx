import React, { useEffect, useState } from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
// import { collection, query } from 'firebase/firestore/lite';
import { channel } from 'diagnostics_channel';
import useCollection from '../../hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';

const Sidebar = () => {
    const user = useAppSelector((state) => state.user);
    // カスタムフックスを作成
    // ここでゆうチャンネンルズとは、ファイヤベースで作ったコレクションの名前が該当される
    const { documents: channels } = useCollection("channels");

    const addChannel = async () => {
        // プロンプト関数を使っていく
      let channelName: string | null =  prompt("新しいチャンネルを作成します");

      if(channelName) {
        // 非同期処理 第1引数
        await addDoc(collection(db, "channels"), {
            // 第2引数
            channelName: channelName,
        });
      }
    };

  return (
    // 型を定義
    // divタグとは、囲った文章全体を一つのまとまりとするブロック要素
    <div className="sidebar">
        {/* サイドバーレフト（型） */}
        {/* この型の中にはサーバーのアイコンなどを追加していく */}
        <div className="sidebarLeft">

            {/* サーバーアイコン（型） */}
            <div className="serverIcon">
                {/* imgタグとは、画像を表示する為のタグ */}
                <img src="./discordIcon.png" alt="" />
            </div>

            {/* サーバーアイコン（型） */}
            <div className="serverIcon">
                {/* imgタグとは、画像を表示する為のタグ */}
                <img src="./logo192.png" alt="" />
            </div>

        </div>

        {/* サイドバーライト（型） */}
        {/* この型の中にはチャンネルを追加していく */}
        <div className="sidebarRight">

            {/* サイドバートップ（型） */}
            <div className="sidebarTop">
                <h3>Discord</h3>
                <ExpandMoreIcon />
            </div>

            {/* サイドバーのチャンネルを追加する */}
            <div className="sidebarChannels">

                {/* サイドバーチャンネルヘッダー（型） */}
                <div className="sidebarChannelsHeader">

                    {/* サイドバーヘッダー（型） */}
                    <div className="sidebarHeader">
                        <ExpandMoreIcon />
                        <h4>プログラミングチャンネル</h4>
                    </div>

                    <AddIcon className="sidebarAddIcon" onClick={() => addChannel()}/>
                </div>
                
                {/* サイドバーチャンネルリスト（型） */}
                <div className="sidebarChannellisut">
                    {channels.map((channel) =>(
                        <SidebarChannel
                            channel={channel} 
                            id={channel.id}
                            key={channel.id}
                        />
                    ))}
                    {/* <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel /> */}
                </div>

                {/* サイドバーフッター（型） */}
                <div className="sidebarFooter">

                    {/* サイドバーアカウント（型） */}
                    <div className="sidebarAccount">

                        {/* 画像を表示 */}
                        <img src={user?.photo} alt="" onClick={() => auth.signOut()}/>

                        {/* アカウントネーム（型） */}
                        <div className="accountName">

                            {/* 見出し */}
                            <h4>{user?.displayName}</h4>

                            {/* spanタグとは、文章内の一部分だけをまとめて指定するインライン要素 */}
                            <span>#{user?.uid.substring(0, 4)}</span>
                        </div>
                    </div>

                    {/* サイドバーボイス（型） */}
                    {/* ボイスマイクのアイコンやヘッドフォンのアイコンを追加していく */}
                    <div className="sidebarVoice">
                        <MicIcon />
                        <HeadphonesIcon />
                        <SettingsIcon />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sidebar