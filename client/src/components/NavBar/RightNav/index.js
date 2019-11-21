import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import { Menu, Avatar, Icon, Dropdown, Modal, message } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import Register from '../../Register';
import Login from '../../Login';
import { DELETE_USER, SIGN_IN } from '../../../constants/ActionTypes';
import toastr from '../../../common/toastr'

import './style.scss';

import config from '../../../utils/config';
import { storeUser, signIn, deleteUser, signOut } from '../../../actions';

const Submenu = logOut => {
  return (
    <Menu>
      <Menu.Item key="4">
        <Link to="" onClick={logOut}>
          Đăng xuất
        </Link>
      </Menu.Item>
    </Menu>
  );
};

const RightMenu = ({ mode, user, accessTokenStore, dispatch }) => {
  console.log('mode: ', mode);

  const [cookies, setCookie, removeCookie] = useCookies('cookies');

  const accessToken = accessTokenStore || cookies.accessToken;

  const [visibleRegForm, setVisibleRegForm] = useState(false);
  const [visibleLoginForm, setVisibleLoginForm] = useState(false);

  const showModalRegister = () => {
    setVisibleRegForm(true);
  };

  const showModalLogin = () => {
    setVisibleLoginForm(true);
  };

  const handleCancelRegForm = e => {
    setVisibleRegForm(false);
  };

  const handleCancelLoginForm = e => {
    setVisibleLoginForm(false);
  };

  const logOut = () => {
    removeCookie('accessToken');
    dispatch({type : DELETE_USER});
    toastr.success("Đăng xuất thành công")
    // dispatch(signOut());
    // window.location.reload();
  };

  useEffect(() => {
    if (accessToken && Object.keys(user).length === 0) {
      axios({
        method: 'GET',
        url: `${config.API_URL}/users/`,
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
        .then(res => {
          if (res.data.results.user) {
            // console.log('user info after call axios: ', res.data.results.user);
            dispatch(storeUser(res.data.results.user));
            // dispatch(signIn(accessToken));
          }
        })
        .catch(() => {
          logOut();
        });

      // window.location.reload();
    }
  }, [accessToken]);
  return (
    <Menu mode={mode} selectedKeys={[]}>
      {Object.keys(user).length > 0 && (
        <Menu.Item key="sign-out" className="avatar">
          <Avatar
            src={
              user.images ||
              'https://cdn.eva.vn/upload/4-2019/images/2019-11-06/sinh-ra-trong-gia-dinh-viet-nhung-co-be-nay-lai-mang-ve-dep-tay-la-ky-untitled-19-1573053449-116-width600height750.jpg'
            }
          />
          <Dropdown overlay={() => Submenu(logOut)}>
            <Link className="ant-dropdown-link" to="">
              {user.full_name} <Icon type="down" />
            </Link>
          </Dropdown>
        </Menu.Item>
      )}
      {!(Object.keys(user).length > 0) && (
        <Menu.Item key="log-in">
          <Link
            // to={location => ({
            //   ...location,
            //   pathname: '/login',
            //   state: { prevPath: location.pathname },
            // })}
            className="auth-button"
            onClick={showModalLogin}
          >
            Đăng nhập
          </Link>
          <Modal
            title="Đăng nhập"
            visible={visibleLoginForm}
            footer={null}
            onCancel={handleCancelLoginForm}
          >
            <Login />
          </Modal>
        </Menu.Item>
      )}
      {!(Object.keys(user).length > 0) && (
        <Menu.Item key="sign-up">
          <Link className="auth-button" onClick={showModalRegister}>
            Đăng ký
          </Link>
          <Modal
            title="Đăng ký"
            visible={visibleRegForm}
            footer={null}
            onCancel={handleCancelRegForm}
            width={'50vw'}
          >
            <Register />
          </Modal>
        </Menu.Item>
      )}
    </Menu>
  );
};

const mapStateToProps = ({ user, auth }) => {
  return {
    user,
    accessTokenStore: auth.accessToken,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withCookies(RightMenu));
