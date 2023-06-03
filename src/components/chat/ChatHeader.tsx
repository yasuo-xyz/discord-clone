import React from 'react'
import "./ChatHeader.scss";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

type Props = {
    channelName: string | null;
};

const ChatHeader = (props: Props) => {
    const { channelName } = props;

    // チャットヘッダー（型）
  return <div className="chatHeader">
    {/* チャットヘッダーレフト（型） */}
    <div className="chatHeaderLeft">
        <h3>
            {/* チャットヘッダーハッシュ（型） */}
            <span className="chatHeaderHash">#</span>
            {channelName}
        </h3>
    </div>

    {/* チャットヘッダーライト */}
    <div className="chatHeaderRight">
        {/* アイコンを用意 */}
        <NotificationsIcon />
        <PushPinIcon />
        <PeopleAltIcon />
        {/* チャット窓を用意 */}
        <div className="chatHeaderSearch">
            <input type="text" placeholder="検索" />
            {/* アイコンを用意 */}
            <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
    </div>
  </div>
}

export default ChatHeader