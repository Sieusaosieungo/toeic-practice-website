import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import axios from 'axios';

import './style.scss';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Admin from '../../pages/Admin';
import Loading from '../Loading';
import config from '../../utils/config';

function App({
  children,
  cookies: {
    cookies: { accessToken },
  },
  auth
}) {
  console.log('lol: ', auth.accessToken)

  const [user, setUser] = useState({});
  const accessTokenCur = auth.accessToken && auth.accessToken || accessToken;

  useEffect(() => {
    if(accessTokenCur !== undefined) {
      axios({
        method: 'GET',
        url: `${config.API_URL}/api/users/`,
        headers: {
          Authorization: `Bearer ${accessTokenCur}`,
        },
      })
        .then(res => {
          console.log(res.data);
          setUser(res.data.results.user);
        })
        .catch(err => console.log(err));
    }
  }, [accessTokenCur]);

  if (accessTokenCur !== undefined) {
    if (Object.keys(user).length > 0) {
      if (user.role.id === 0) {
        return (
          <Fragment>
            <NavBar />
            {children}
            <Footer />
          </Fragment>
        );
      } else {
        return <Admin>{children}</Admin>;
      }
    } else {
      return <Loading />;
    }
  } else {
    return (
      <Fragment>
        <NavBar />
        {children}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user,auth }) => {
  console.log('id from connect: ');

  return { user, auth };
};

export default connect(mapStateToProps)(withCookies(App));
