import { Row, Layout, Col, Image } from "antd"
import React from "react"
import Sidebar from "../../components/SideBar"
import avatarDefault from "../../assets/453178253_471506465671661_2781666950760530985_n.png"

const Home = () => {
    return (
        <Row>
            <Col>
                <img
                src={avatarDefault}
                preview={{
                src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }}
        />            
        </Col>
        </Row>
    )
}

export default Home