import React from 'react';
import { Button } from '@material-ui/core';
import logo from '../../assets/discord_logo.svg';

import { auth, provider } from '../../config/firebase';

import './styles.css';

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__logo">
          <img src={logo} alt="Discord logo" />
        </div>

        <div className="login__welcome">
          <h2>Welcome back!</h2>
          <p>We're so excited to see you again!</p>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
