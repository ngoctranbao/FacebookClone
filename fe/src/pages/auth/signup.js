import React, { useState } from 'react';
import { Form, Input, Button, Col, Modal, Row, Divider,DatePicker, Radio, Avatar } from 'antd';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { signupService } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const onFinish = async(values) => {
      try {

        const response = await signupService({userName: values.userName, password: values.password, email: values.email})
  
        if (response.status === 200) {          
          console.log('Sign up successful:', response.data);
          setIsModalOpen(false)
        } else {
            console.log('Sign up failed:', response);
          }
      } catch (error) {
        console.error('Sign up failed:', error.message);
      }
    }

  return (
    <>
    <Button style={{backgroundColor: "green", color: "white"}} onClick={showModal}>
        Create new accout
    </Button>
      <Modal title="Sign Up" 
      open={isModalOpen} onOk={handleOk} 
      onCancel={handleCancel}
      footer={[
      ]}
      >
        <Col>
        <p>It's quick and easy</p>
        <Divider/>
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="" name="userName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên đăng nhập",
                },
              ]}
            >
                <Input
                  placeholder="User Name"
                />
            </Form.Item>
            <Form.Item label="" name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email",
                },
              ]}
            >
              <Input
                placeholder="Mobile Number or Email address"
              />
            </Form.Item>

            <Form.Item label="" name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="New Password"
              />
            </Form.Item>
            <Form.Item label="Password Confirm"
              name="passwordConfirm"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận lại mật khẩu",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Password không giống Nhập lại!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                type="re-password"
                placeholder="Password Confirm"
              />
            </Form.Item>
            <Form.Item label="Date of Birth" name="birthday">
                <DatePicker />
            </Form.Item>
            <Form.Item label="Gender" name="gender"
            >
                <Radio.Group>
                <Radio value="Female"> Female </Radio>
                <Radio value="Male"> Male </Radio>
                <Radio value="Custom">Custom</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Row style={{ justifyContent: "center" }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Modal>
    </>
  );
};

export default SignUpForm;