import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { services } from '../../services';

import './style.scss';
import { SIGN_IN } from '../../constants/ActionTypes';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Admin from '../../pages/Admin';
import Loading from '../Loading';
import config from '../../utils/config';
import { setCORS } from 'google-translate-api-browser';
// setting up cors-anywhere server address
const translate = setCORS('http://cors-anywhere.herokuapp.com/');
function App({
  children,
  cookies: {
    cookies: { accessToken },
  },
  auth,
  dispatch,
}) {
  var timeout;
  var getSelection = '';
  document.addEventListener('mouseup', event => {
    // clearTimeout(timeout);
    if(user.role != null && user.role.id == 0) {
      let selection = document.getSelection
        ? document.getSelection().toString()
        : document.selection.createRange().toString();
      // timeout = setTimeout(function(){console.log(selection)}, 2000)
      if (selection != '' && getSelection != selection) {
        getSelection = selection;
        translate(selection, { de: 'en', to: 'vi' })
          .then(res => {
            // I do not eat six days
            var text = res.text;
            services
              .addRecentWord({
                newWord: selection,
                meaning: text,
              })
              .then(res => {
                console.log(res);
                dispatch({
                  type: SIGN_IN,
                  data: res,
                  accessToken: res.data.results.token,
                });
              });
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  });
  console.log('lol: ', auth.accessToken);

  const [user, setUser] = useState({});
  const accessTokenCur = (auth.accessToken && auth.accessToken) || accessToken;

  useEffect(() => {
    if (accessTokenCur !== undefined) {
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

  // console.log('accessToken: ', accessTokenCur);

  if (accessTokenCur && accessTokenCur !== '') {
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

const mapStateToProps = ({ user, auth }) => {
  console.log('id user from connect: ', user);

  return { user, auth };
};

export default connect(mapStateToProps)(withCookies(App));
