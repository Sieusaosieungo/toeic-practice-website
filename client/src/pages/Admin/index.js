import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import RightNav from '../../components/NavBar/RightNav';
import { Switch, Route } from 'react-router-dom';
import './style.scss';

import PostGrammar from '../PostGrammar';
import MyPostsGrammar from '../MyPostsGrammar';
import PostTopicGrammar from '../PostTopicGrammar';
import UploadPart7 from '../UploadPart7';
import UploadPart6 from '../UploadPart6';
import UploadPart5 from '../UploadPart5';
import UploadPart4 from '../UploadPart4';
import UploadPart3 from '../UploadPart3';
import UploadPart2 from '../UploadPart2';
import UploadPart1 from '../UploadPart1';
import UserManager from '../UserManager';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const prefixCls = 'admin';

const Admin = ({}) => {
  const mode = 'horizontal';
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = collapsed => setCollapsed(collapsed);
  return (
    <div className={`${prefixCls}`}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logoAdmin" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="0">
              <Icon type="user" />
              <span>
                <Link to="/" style={{ color: '#fff' }}>
                  User
                </Link>
              </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="question" />
                  <span>
                    <Link to="/part/1" style={{ color: '#fff' }}>
                      Question
                    </Link>
                  </span>
                </span>
              }
            >
              <Menu.Item key="1">
                <Link to="/part/1">Part 1</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/part/2">Part 2</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/part/3">Part 3</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/part/4">Part 4</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/part/5">Part 5</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/part/6">Part 6</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/part/7">Part 7</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="grammar" />
                  <span>
                    <Link to="/topic" style={{ color: '#fff' }}>
                      Grammar
                    </Link>
                  </span>
                </span>
              }
            >
              <Menu.Item key="topic">
                <Link to="/upload-topic-grammar">Topic</Link>
              </Menu.Item>
              <Menu.Item key="post-grammar">
                <Link to="/post-grammar">Grammar</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="my-posts-grammar">
              <Icon type="table" />
              <span>
                <Link to="/my-posts-grammar" style={{ color: '#fff' }}>
                  My grammar post
                </Link>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="menucon"
            style={{ background: '#fff', padding: 0 }}
          >
            <div className="rightMenu" style={{ float: 'right' }}>
              <RightNav mode={mode} />
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
              <Switch>
                <Route path="/" component={UserManager} exact={true} />
                <Route
                  path="/post-grammar"
                  component={PostGrammar}
                  exact={true}
                />
                <Route
                  path="/my-posts-grammar"
                  component={MyPostsGrammar}
                  exact={true}
                />
                <Route
                  path="/upload-topic-grammar"
                  component={PostTopicGrammar}
                  exact={true}
                />
                <Route path="/part/7" component={UploadPart7} exact={true} />
                <Route path="/part/6" component={UploadPart6} exact={true} />
                <Route path="/part/5" component={UploadPart5} exact={true} />
                <Route path="/part/4" component={UploadPart4} exact={true} />
                <Route path="/part/3" component={UploadPart3} exact={true} />
                <Route path="/part/2" component={UploadPart2} exact={true} />
                <Route path="/part/1" component={UploadPart1} exact={true} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            NW ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
