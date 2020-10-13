import React from 'react';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
// import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import ChannelChat from '../ChannelChat';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

import './styles.css';

function Layout() {
  return (
    <main className="layout">
      <ServerList />
      <ServerName />
      {/* <ChannelInfo /> */}
      <ChannelList />
      <UserInfo />
      <ChannelChat />
      <UserList />
    </main>
  );
}

export default Layout;
