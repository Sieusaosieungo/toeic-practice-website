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
<<<<<<< HEAD
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
=======
              <Icon type="user" />
              <span>User</span>
>>>>>>> 2cfe2c34a79259281ad11ea6fa3c240a720c08fe
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
<<<<<<< HEAD
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
=======
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
>>>>>>> 2cfe2c34a79259281ad11ea6fa3c240a720c08fe
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
<<<<<<< HEAD
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
=======
                  <Icon type="grammar" />
                  <span>Grammar</span>
                </span>
              }
            >
              <Menu.Item key="1">Topic</Menu.Item>
              <Menu.Item key="2">Grammar</Menu.Item>
            </SubMenu>
>>>>>>> 2cfe2c34a79259281ad11ea6fa3c240a720c08fe
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
<<<<<<< HEAD
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
=======
            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
>>>>>>> 2cfe2c34a79259281ad11ea6fa3c240a720c08fe
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
