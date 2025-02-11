import React, { useContext, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const auth = getAuth();
  // const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  if (localStorage.getItem('accessToken')) {
    // navigate('/');
    return <Navigate to='/' />
  }; // Chỉ navigate khi user thay đổi

  const handleLoginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user: { uid, displayName } } = await signInWithPopup(auth, provider);
      const { data } = await graphQLRequest({
        query: `mutation register($uid: String!, $name: String!) {
        register(uid: $uid, name: $name) {
        uid,
        name
        }
      }`, variables: {
          uid,
          name: displayName
        }
      })
      console.log('register: ', { data });

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: '10px' }}>
        Welcome to Note App
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  );
};

export default Login;
