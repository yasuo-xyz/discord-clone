import React from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
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
                <img src="./logo192.png" alt="" />
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

                    <AddIcon className="sidebarAddIcon" />
                </div>
                
                {/* サイドバーチャンネルリスト（型） */}
                <div className="sidebarChannellisut">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>

                {/* サイドバーフッター（型） */}
                <div className="sidebarFooter">

                    {/* サイドバーアカウント（型） */}
                    <div className="sidebarAccount">

                        {/* 画像を表示 */}
                        <img src="./icon.png" alt="" />

                        {/* アカウントネーム（型） */}
                        <div className="accountName">

                            {/* 見出し */}
                            <h4>ShinCode</h4>

                            {/* spanタグとは、文章内の一部分だけをまとめて指定するインライン要素 */}
                            <span>#8162</span>
                        </div>
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
  )
}

export default Sidebar