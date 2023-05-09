import React from 'react';
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    // 型を定義
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
            </div>

        </div>
    </div>
  )
}

export default Sidebar