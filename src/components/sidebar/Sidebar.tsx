import React from 'react';
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    // 型を定義
    <div className="sidebar">
        {/* サイドバーレフト（型） */}
        {/* この型の中にはサーバーのアイコンなどを追加していく */}
        <div className="sidebarLeft">

        </div>
        {/* サイドバーライト（型） */}
        {/* この型の中にはチャンネルを追加していく */}
        <div className="sidebarRight"></div>
    </div>
  )
}

export default Sidebar