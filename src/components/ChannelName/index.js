import React from 'react';
import { useDispatch } from 'react-redux';
import { PersonAdd, Settings } from '@material-ui/icons';

import { setChannelInfo } from '../../store/features/app/appSlice';

import './styles.css';

const ChannelName = ({ channelId, channelName }) => {
  const dispatch = useDispatch();

  return (
    <div className="channelName">
      <div
        className="channelName__right"
        onClick={() =>
          dispatch(
            setChannelInfo({
              channelId,
              channelName,
            }),
          )
        }
      >
        <span className="channelName__hash">#</span>
        <p className="channelName__title">{channelName}</p>
      </div>

      <div className="channelName__left">
        <PersonAdd className="channelName__Icon" />
        <Settings className="channelName__Icon" />
      </div>
    </div>
  );
};

export default ChannelName;
