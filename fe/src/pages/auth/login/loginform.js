import { AutoComplete, Avatar, Button, Col, Divider, Row } from "antd";
import React from "react";
import "../../../styles/auth/login.css"


const LoginForm = () => {
    return(
        <div>
        <Row className="login">
            <Col span={12} className="recent-login">
                <Row style={{fontSize: "46px", color: "#4169E1", fontWeight: "700"}}>
                    facebook
                </Row>
                <Row style={{fontSize: "40px"}}>
                    Đăng nhập gần đây
                </Row>
                <p>Click your picture or add an account</p>
                <Row>
                    <Avatar>
                    </Avatar>
                </Row>
            </Col>
            <Col span={12} className="login-form">
                <AutoComplete
                    placeholder="Email Address or Phone Number"
                />
                <br/>
                <AutoComplete
                    placeholder="Password"
                />
                <br/>
                <Button>
                    Log In
                </Button>
                <br/>
                <a href="">Forgotten password?</a>
                <Divider/>
                <Button>
                    Create new accout
                </Button>
            </Col>

        </Row>
        </div>
    )
}

export default LoginForm