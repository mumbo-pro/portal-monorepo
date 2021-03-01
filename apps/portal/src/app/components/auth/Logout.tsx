import React from 'react';
import { NavLink } from 'reactstrap';
import { useAppStore } from '../../store/index';
import { AppState } from '../../store/interface';

const Logout = () => {
  const { logout } = useAppStore((state: AppState) => state);

  const userLogout = () => {
    // api call
    console.log('logout');
    logout();
  };

  return (
    <NavLink onClick={userLogout} href="#">
      Logout
    </NavLink>
  );
};

export default Logout;
