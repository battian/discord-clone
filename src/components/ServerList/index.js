import React from 'react';

import icon from '../../assets/discord_icon.jpg';

import './styles.css';

const ServerList = () => {
  return (
    <section className="serverList">
      <div className="serverList__button active">
        <img src={icon} alt="Discord" />
      </div>

      <div className="serverList__separator"></div>

      <div className="serverList__button"></div>
      <div className="serverList__button"></div>
      <div className="serverList__button"></div>
      <div className="serverList__button"></div>
      <div className="serverList__button"></div>
      <div className="serverList__button"></div>
      <div className="serverList__button"></div>
    </section>
  );
};

export default ServerList;
