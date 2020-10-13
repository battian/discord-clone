import React, { useEffect, useState } from 'react';
import { Add } from '@material-ui/icons';

import db from '../../config/firebase';

import ChannelName from '../ChannelName';

import './styles.css';

const ChannelList = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data(),
        })),
      );
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');

    if (channelName) {
      db.collection('channels').add({
        channelName,
      });
    }
  };

  return (
    <div className="channelList">
      <div className="channelList__header">
        <p>Text Channels</p>
        <Add className="channelList__addChannel" onClick={handleAddChannel} />
      </div>

      <div className="channelList__channel">
        {channels.map(({ id, channel }) => (
          <ChannelName key={id} channelId={id} channelName={channel.channelName} />
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
