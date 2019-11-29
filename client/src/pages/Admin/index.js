import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import RightNav from '../../components/NavBar/RightNav';
import './style.scss';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const prefixCls = 'admin';

const Admin = () => {
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
            <Menu.Item key="1">
              <Icon type="user" />
              <span>User</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="question" />
                  <span>Question</span>
                </span>
              }
            >
              <Menu.Item key="1">Part 1</Menu.Item>
              <Menu.Item key="2">Part 2</Menu.Item>
              <Menu.Item key="3">Part 3</Menu.Item>
              <Menu.Item key="4">Part 4</Menu.Item>
              <Menu.Item key="5">Part 5</Menu.Item>
              <Menu.Item key="6">Part 6</Menu.Item>
              <Menu.Item key="7">Part 7</Menu.Item>
            </SubMenu>
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
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
