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
        <Sider style={{position: "fixed", width: "200px"}}>
            <Row>Đoạn chat</Row>
          </Sider>
    )
}

export default Sidebar