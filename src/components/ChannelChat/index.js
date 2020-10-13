import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import { AddCircle } from '@material-ui/icons';

import ChannelMessage from '../ChannelMessage';

import './styles.css';

import { selectUser } from '../../store/features/user/userSlice';
import { selectChannelId, selectChannelName } from '../../store/features/app/appSlice';
import db from '../../config/firebase';
import ChannelInfo from '../ChannelInfo';

const ChannelChat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const messagesRef = useRef();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())));
    }
  }, [channelId]);

  const sendMessage = e => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user,
    });

    setInput('');
  };

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <>
      <ChannelInfo channelName={channelName} />

      <div className="channelChat">
        <div className="channelChat__messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <ChannelMessage
              key={index}
              timestamp={new Date(message.timestamp?.toDate()).toUTCString()}
              message={message.message}
              user={message.user}
            />
          ))}
        </div>

        <div className="channelChat__inputWrapper">
          <AddCircle className="channelChat__Icon" />
          <form>
            <input
              value={input}
              disabled={!channelId}
              onChange={e => setInput(e.target.value)}
              placeholder={channelId ? `Chat in #${channelName}` : ''}
            />
            <button
              className="channelChat__inputButton"
              onClick={sendMessage}
              disabled={!channelId}
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ChannelChat;
