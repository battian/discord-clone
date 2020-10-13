import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login, logout, selectUser } from './store/features/user/userSlice';
import { auth } from './config/firebase';

import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const userObj = {
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        };

        dispatch(login(userObj));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <main className="app">{user ? <Layout /> : <Login />}</main>;
}

export default App;
