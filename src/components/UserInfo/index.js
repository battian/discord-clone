import React from 'react';
import { useSelector } from 'react-redux';
import { MicOff, Headset, Settings } from '@material-ui/icons/';

import { selectUser } from '../../store/features/user/userSlice';
import { auth } from '../../config/firebase';

import './styles.css';

const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <div className="userInfo">
      <div className="userInfo__profile">
        <img src={user.photo} alt="avatar" />
        <div className="userInfo__profileInfo">
          <strong>{user.displayName}</strong>
          <span>#2808</span>
        </div>
      </div>

      <div>
        <MicOff className="userInfo__profileIcon" />
        <Headset className="userInfo__profileIcon" />
        <Settings className="userInfo__profileIcon" onClick={() => auth.signOut()} />
      </div>
    </div>
  );
};

export default UserInfo;
