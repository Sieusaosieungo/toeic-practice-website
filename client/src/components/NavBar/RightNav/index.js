import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import { Menu, Avatar, Icon, Dropdown, Modal, message, Spin } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import Register from '../../Register';
import Login from '../../Login';
import Update from '../../Update';
import RecentWord from '../../RecentWord';
import { services } from '../../../services';
import { DELETE_USER, SIGN_IN, SIGN_OUT } from '../../../constants/ActionTypes';
// import toastr from '../../../common/toastr'

import './style.scss';

import config from '../../../utils/config';
import { storeUser, signIn, deleteUser, signOut } from '../../../actions';

const RightMenu = ({ mode, user, accessTokenStore, dispatch }) => {
  // console.log(user)
  // console.log('mode: ', mode);
  // console.log(history)
  const [cookies, setCookie, removeCookie] = useCookies('cookies');

  const accessToken = accessTokenStore || cookies.accessToken;

  const [visibleRegForm, setVisibleRegForm] = useState(false);
  const [visibleLoginForm, setVisibleLoginForm] = useState(false);
  const [visibleUpdateForm, setVisibleUpdateForm] = useState(false);
  const [visibleRecentWord, setVisibleRecentWord] = useState(false);
  const [loading, setLoading] = useState(false);

  const Submenu = logOut => {
    return (
      <Menu>
        <Menu.Item key="1">
          <div onClick={showModalUpdate}>Cập nhật thông tin</div>
        </Menu.Item>
        <Menu.Item key="4">
          <div onClick={showRecentWord}>Từ gần đây</div>
        </Menu.Item>
        <Menu.Item key="4">
          <div onClick={logOut}>Đăng xuất</div>
        </Menu.Item>
      </Menu>
    );
  };

  const showModalRegister = () => {
    setVisibleRegForm(true);
  };

  const showModalLogin = e => {
    e.preventDefault();
    setVisibleLoginForm(true);
  };

  const showModalUpdate = e => {
    e.preventDefault();
    setVisibleUpdateForm(true);
  };

  const showRecentWord = () => {
    setVisibleRecentWord(true);
  };

  const handleCancelRegForm = e => {
    setVisibleRegForm(false);
  };

  const handleCancelLoginForm = e => {
    setVisibleLoginForm(false);
  };

  const handleCancelUpdateForm = e => {
    setVisibleUpdateForm(false);
  };

  const handleCancelRecentWord = e => {
    setVisibleRecentWord(false);
  };

  const onLogin = res => {
    // console.log(data)
    setCookie('accessToken', res.data.results.token);
    setCookie('isAuth', true);
    setVisibleRecentWord(true);
    message.success('Đăng nhập thành công !');
  };

  const logOut = () => {
    removeCookie('accessToken');
    removeCookie('isAuth');
    dispatch({ type: DELETE_USER });
    dispatch({ type: SIGN_OUT });
    setVisibleLoginForm(false);
    message.success('Đăng xuất thành công');
    // toastr.success("Đăng xuất thành công")
    // dispatch(signOut());
    // window.location.reload();
  };

  const onSignup = res => {
    // console.log(data)
    setCookie('accessToken', res.data.results.token);
    setCookie('isAuth', true);
    message.success('Đăng kí thành công !');
    setVisibleRecentWord(true);
  };

  useEffect(() => {
    if (accessToken && Object.keys(user).length === 0) {
      setLoading(true);
      services
        .getUser(accessToken)
        .then(res => {
          if (res.data.results.user) {
            // console.log('user info after call axios: ', res.data.results.user);
            dispatch({ type: SIGN_IN, data: res });
            setLoading(false);
            setVisibleRecentWord(true);
            // dispatch(signIn(accessToken));
          }
        })
        .catch(() => {
          setLoading(false);
          setVisibleRecentWord(true);
          // logOut();
        });

      services.getGrammarTopics().then(res => {
        console.log(res.data);
        var grammar = [];
        res.data.results.topics.map(function(data, i) {
          services.getGrammarById({ idTopic: data._id }).then(res => {
            console.log(res.data.results.grammars);
            grammar.push({ id: data._id, data: res.data.results.grammars });
            sessionStorage.grammar = JSON.stringify(grammar);
          });
        });
        sessionStorage.grammar_topics = JSON.stringify(res.data);
      });
      // services.getGrammarById()
      //   .then(res => {
      //     sessionStorage.grammar_topics = JSON.stringify(res.data)
      //   })
      // window.location.reload();
    }
  }, [accessToken]);
  // console.log(user.data.results.user.avatar)
  return (
    <Spin spinning={loading} size="small">
      <Menu mode={mode} selectedKeys={[]}>
        {Object.keys(user).length > 0 && (
          <Menu.Item key="sign-out" className="avatar">
            <Avatar
              src={
                (user.data.results.user.avatar &&
                  config.API_URL + user.data.results.user.avatar) ||
                'https://cdn.eva.vn/upload/4-2019/images/2019-11-06/sinh-ra-trong-gia-dinh-viet-nhung-co-be-nay-lai-mang-ve-dep-tay-la-ky-untitled-19-1573053449-116-width600height750.jpg'
              }
              style={{ marginRight: '10px' }}
            />
            {user.data.results.user.name}
            <Dropdown overlay={() => Submenu(logOut)}>
              <Link
                className="ant-dropdown-link"
                to=""
                onClick={e => e.preventDefault()}
              >
                {user.full_name} <Icon type="down" />
              </Link>
            </Dropdown>
          </Menu.Item>
        )}
        {
          //   Object.keys(user).length > 0 && user.data.results.user.role.id == 0 && (
          //   <Menu.Item key="log-in">
          //     <Link to="" className="auth-button" onClick={showModalLogin}>
          //       Đăng nhập
          //     </Link>
          //     <Modal
          //       title="Đăng nhập"
          //       visible={visibleLoginForm}
          //       footer={null}
          //       onCancel={handleCancelLoginForm}
          //     >
          //       <Login login={onLogin} />
          //     </Modal>
          //   </Menu.Item>
          // )
        }
        {!(Object.keys(user).length > 0) && (
          <Menu.Item key="log-in">
            <Link to="" className="auth-button" onClick={showModalLogin}>
              Đăng nhập
            </Link>
            <Modal
              title="Đăng nhập"
              visible={visibleLoginForm}
              footer={null}
              onCancel={handleCancelLoginForm}
            >
              <Login
                login={onLogin}
                register={() => {
                  setVisibleLoginForm(false);
                  setVisibleRegForm(true);
                }}
              />
            </Modal>
          </Menu.Item>
        )}
        {!(Object.keys(user).length > 0) && (
          <Menu.Item key="sign-up">
            <Link to="" className="auth-button" onClick={showModalRegister}>
              Đăng ký
            </Link>
            <Modal
              title="Đăng ký"
              visible={visibleRegForm}
              footer={null}
              onCancel={handleCancelRegForm}
              width={'50vw'}
            >
              <Register signup={onSignup} />
            </Modal>
          </Menu.Item>
        )}
        <Modal
          title="Cập nhật thông tin"
          visible={visibleUpdateForm}
          footer={null}
          onCancel={handleCancelUpdateForm}
          width={'50vw'}
        >
          <Update accessToken={accessToken} signup={onSignup} />
        </Modal>
        <Modal
          title="Từ gần đây"
          visible={visibleRecentWord}
          footer={null}
          onCancel={handleCancelRecentWord}
        >
          <RecentWord user={user} />
        </Modal>
      </Menu>
    </Spin>
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
