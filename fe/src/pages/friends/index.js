import React from "react"
import Sidebar from "../../components/SideBar"
import { Col, Grid } from "antd"
import { UserBox } from "./user"

const Friend = () => {
    return (
        <div style={{width : "100%", height: "100%", display: "flex", justifyContent: "space-between"}}>
            <Col>
                <Sidebar/>
            </Col>
            <Col>
                <h2> Những người bạn có thể biết</h2>
                <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto"}}>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                    <UserBox/>
                </div>
            </Col>
        </div>
    )
}

export default Friend