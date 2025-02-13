import React, { createContext, useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      if (user?.uid) {
        setUser(user);
        if (user.accessToken !== localStorage.getItem('accessToken')) {
          window.location.reload();
        }
        localStorage.setItem('accessToken', user.accessToken);
        setIsLoading(false);
        return;
      }

      // reset user info
      setUser({});
      setIsLoading(false);
      localStorage.clear();
      navigate('/login');
    })

    return () => {
      unsubcribed();
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading ? <CircularProgress /> : children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
