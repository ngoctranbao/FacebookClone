import { Row, Layout, Col, Image, Avatar } from "antd"
import React from "react"
import Sidebar from "../../components/SideBar"
import { Post } from "./post"

const Home = () => {
    return (
        <Row style={{display: "flex", justifyContent: "space-between", backgroundColor: "rgb(241, 236, 236)"}}>
            <Col>
                <Sidebar/>
            </Col>
            <Col style={{display: "flex", flexDirection: "column"}}>
                <Post/>
                <Post/>
            </Col>
            <Col>
                Quảng cáo
            </Col>
        </Row>
    )
}

export default Home