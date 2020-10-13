import React from 'react';
import { ExpandMore } from '@material-ui/icons';

import './styles.css';

const ServerName = () => {
  return (
    <div className="serverName">
      <h3>Discord</h3>
      <ExpandMore />
    </div>
  );
};

export default ServerName;
