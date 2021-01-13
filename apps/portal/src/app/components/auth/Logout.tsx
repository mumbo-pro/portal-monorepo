import React from 'react';
import { NavLink } from 'reactstrap';
import { useAppStore } from '../../store/index';
// import { connect } from 'react-redux';
// import { logout } from '../../actions/authActions';
// import PropTypes from 'prop-types';

import {AppState} from '../../store/interface'

function Logout() {
  // static propTypes = {
  //   logout: PropTypes.func.isRequired
  // };

const { logout  } = useAppStore(
  (state:AppState) => state
);


  const userLogout = () => {
    // api call

    console.log('logout');
    logout()
  };

  return (
    <NavLink onClick={userLogout} href="#">
      Logout
    </NavLink>
  );
}

export default Logout;
// export default connect(
//   null,
//   { logout }
// )(Logout);
