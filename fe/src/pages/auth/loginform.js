import { AutoComplete, Avatar, Button, Col, Divider, Layout, Row } from "antd";
import {  UserOutlined } from '@ant-design/icons'
import SignUpForm from "./signup";
import React from "react";
import "./login.css"


const LoginForm = () => {

    
    return(
        <Layout className="login" style={{height: "100vh"}}>
            <Row>
                <Col span={2}/>
                <Col span={12} className="recent-login">
                    <Row style={{fontSize: "46px", color: "#4169E1", fontWeight: "700"}}>
                        facebook
                    </Row>
                    <Row style={{fontSize: "40px"}}>
                        Đăng nhập gần đây
                    </Row>
                    <p>Click your picture or add an account</p>
                    <Row>
                        <Avatar shape="square" size={144} icon={<UserOutlined />} />
                    </Row>
                </Col>
                <Col span={8} className="login-form">
                    <AutoComplete
                        placeholder="Email Address or Phone Number"
                        style={{width: "100%", height: "50px"}}
                    />
                    <br/>
                    <AutoComplete
                        placeholder="Password"
                        style={{width: "100%", height: "50px"}}
                     />
                    <br/>
                    <Button
                        style={{width: "100%", height: "50px", backgroundColor: "blue", color: "white"}}

                    >
                        Log In
                    </Button>
                    <br/>
                    <a href="">Forgotten password?</a>
                    <Divider/>
                    <SignUpForm/>
                </Col>
            </Row>
        </Layout>
    )
}

export default LoginForm