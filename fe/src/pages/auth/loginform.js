import { AutoComplete, Avatar, Button, Col, Divider, Layout, Row } from "antd";
import {  UserOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";
import SignUpForm from "./signup";
import React, {useContext, useState} from "react";
import { AuthContext } from "../../providers/authProviders";
import "./login.css"
import { loginService } from "../../services/auth";

const LoginForm = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setAuthUser } = useContext(AuthContext)
  
    const handleLogin = async () => {
      try {
        const response = await loginService({email: emailOrPhone, password: password})
        
        if (response.status === 200) {
          console.log('Login successful:', response);
          localStorage.setItem("accessToken", JSON.stringify(response.token));
          localStorage.setItem("authUser", JSON.stringify(response.data.user));
          setAuthUser(response.data.user)
          navigate("/");
        } 
        if (response.status === 203) {
            console.log('Login failed:', response.message);
        }
      } catch (error) {
        console.error('Login failed:', error.response.data);
      }
    };

    
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
                        onChange={(value) => setEmailOrPhone(value)}
                        value={emailOrPhone}
                        style={{width: "100%", height: "50px"}}
                    />
                    <br/>
                    <AutoComplete
                        placeholder="Password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                        type="password"
                        style={{width: "100%", height: "50px"}}
                     />
                    <br/>
                    <Button
                        style={{width: "100%", height: "50px", backgroundColor: "blue", color: "white"}}
                        onClick={handleLogin}
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