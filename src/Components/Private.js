import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const Private = () => {
  
  const user =  JSON.parse(localStorage.getItem('User'))

  console.log(user)
  return (
  <>
    {!user ? <Navigate to="/login" /> : <Outlet />}
  </>
  );
};

export default Private;