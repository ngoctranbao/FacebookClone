import React from "react"
import Sidebar from "../../components/SideBar"
import { Avatar, Col, Input, message, Row } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { Message } from "./message"

const messages = [
    {userId: 1, content: "hi, nice two meet you"},
    {userId: 4, content: "hi"}
]



const Messages = () => {
    return (
        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-between"}}>
            <Col>
                <Sidebar/>
            </Col>
            <Col>
                <div className="roomchat-container">
                    <Row className="roomchat-header">
                        <Avatar />
                        <Col style={{fontWeight: "bold"}}>
                            User 4
                        </Col>
                    </Row>
                    <Row className="roomchat-message">
                        {
                            messages.map((message) =>{
                                <Message message={message}/>
                            })
                        }
                    </Row>
                    <Row className="roomchat-footer">
                        <Input
                            placeholder="Aa"
                            onChange={(e) => {}}
                            value={`Aa`}
                            suffix={<FontAwesomeIcon icon={faPaperPlane}/>}
                        />
                    </Row>
                </div>
            </Col>
            <Col>
                Quảng cáo
            </Col>

        </div>
    )
}

export default Messages