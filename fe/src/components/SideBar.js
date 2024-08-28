import React from 'react';
import { Col, Menu, Layout, Row } from "antd"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        label: React.createElement(icon),
    };
    });

const Sidebar = () => {
    return (
        <Sider width={200}>
            {/* <Row>Đoạn chat</Row> */}
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
    )
}

export default Sidebar