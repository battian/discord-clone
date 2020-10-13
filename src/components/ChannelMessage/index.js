import React from 'react';

import './styles.css';

const ChannelMessage = ({ user, timestamp, message }) => {
  return (
    <div className="channelMessage">
      <img src={user.photo} alt="nome" />

      <div className="channelMessage__info">
        <div className="channelMessage__header">
          <strong>{user.displayName}</strong>
          <span className="channelMessage__timestamp">{timestamp}</span>
        </div>

        <p className="channelMessage__content">{message}</p>
      </div>
    </div>
  );
};

export default ChannelMessage;
