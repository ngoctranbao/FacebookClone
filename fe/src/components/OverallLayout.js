import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import App from '../App';
import Dashboard from './DashBar';
const { Header, Content, Sider } = Layout;


const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
const key = String(index + 1);
return {
    key: `sub${key}`,
    label: React.createElement(icon),
};
});


  const OverallLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout style={{height: "100vh"}}>
            <App/>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default OverallLayout;