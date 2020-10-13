import React from 'react';
import { useSelector } from 'react-redux';

import icon from '../../assets/discord_icon.jpg';
import { selectUser } from '../../store/features/user/userSlice';

import './styles.css';

const UserRow = ({ nickname, isBot, isUser }) => {
  const user = useSelector(selectUser);

  return (
    <div className="userRow">
      <img
        src={isUser ? user.photo : icon}
        alt={nickname}
        className={isBot ? 'userRow__avatar bot' : 'userRow__avatar'}
      />

      <strong>{isUser ? user.displayName : nickname}</strong>

      {isBot && <span>Bot</span>}
    </div>
  );
};

const UserList = () => {
  const user = useSelector(selectUser);

  return (
    <div className="userList">
      <div className="userList__role">
        <p>Online - 2</p>
        {user && <UserRow nickname="User" isUser />}
        <UserRow nickname="iamabot" isBot />
      </div>

      <div className="userList__role">
        <p>Offline - 5</p>
        <UserRow nickname="kjs" />
        <UserRow nickname="jnk" />
        <UserRow nickname="pcy" />
        <UserRow nickname="lsm" />
        <UserRow nickname="bp" />
      </div>
    </div>
  );
};

export default UserList;
