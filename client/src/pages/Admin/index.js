import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import RightNav from '../../components/NavBar/RightNav';
import './style.scss';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const prefixCls = 'admin';

const Admin = (
  {
    // match: {
    //   params: { idPart },
    // },
  },
) => {
  // console.log('idPart: ', idPart);

  // const mode = platform.isMobile ? 'vertical' : 'horizontal';
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
            <Menu.Item key="8">
              <Icon type="grammar" />
              <span>
                <Link to="/post-grammar" style={{ color: '#fff' }}>
                  User
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
              Bill is a cat.
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
