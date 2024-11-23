import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  UserOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={['dashboard']}
          items={[
            {
              key: 'dashboard',
              icon: <DashboardOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: 'categories',
              icon: <AppstoreAddOutlined />,
              label: <Link to="/admin-category">Categories</Link>,
            },
            {
              key: 'blogs',
              icon: <FileTextOutlined />,
              label: <Link to="/admin-blogs">Blogs</Link>,
            },
            {
              key: 'users',
              icon: <UserOutlined />,
              label: <Link to="/admin-users">Users</Link>,
            },
            {
              key: 'logout',
              icon: <PoweroffOutlined />,
              label: <Link to="/login">Logout</Link>,
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;