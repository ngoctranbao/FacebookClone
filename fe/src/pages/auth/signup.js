import React, { useState } from 'react';
import { AutoComplete, Button, Col, Modal, Row } from 'antd';

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

  return (
    <>
    <Button style={{backgroundColor: "green", color: "white"}} onClick={showModal}>
        Create new accout
    </Button>
      <Modal title="Sign Up" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Col>
            <AutoComplete placeholder="User Name"/>
            <br/>
            <AutoComplete placeholder="Email Address"/>
            <br/>
            <AutoComplete placeholder>New password</AutoComplete>
            <br/>
            <AutoComplete> Confirm Password</AutoComplete>
            <br/>
            <p>Date of birth</p>
            <p>Gender</p>
        </Col>
      </Modal>
    </>
  );
};

export default SignUpForm;