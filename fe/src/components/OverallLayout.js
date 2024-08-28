import React from 'react';
import { Layout, Menu, Row, theme } from 'antd';
import App from '../App';
import Dashboard from './DashBar';
import Sidebar from './SideBar';
const { Header, Content, Sider } = Layout;

  const OverallLayout = () => {
  return (
    <Layout style={{height: "100vh"}}>
      <Row>
        <Dashboard/>
      </Row>
      <Layout>
        <Sidebar/>
        <Layout>
            <App/>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default OverallLayout;