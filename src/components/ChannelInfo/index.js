import React from 'react';

import './styles.css';

const ChannelInfo = ({ channelName }) => {
  return (
    <div className="channelInfo">
      <div className="channelInfo__right">
        <span className="channelInfo__hash">#</span>
        <p className="channelInfo__name">{channelName ? channelName : 'Home'}</p>

        <div className="channelInfo__separator" />

        <p className="channelInfo__description">Chat here</p>
      </div>
    </div>
  );
};

export default ChannelInfo;
