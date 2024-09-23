import { Avatar, Col, Row } from "antd"
import avatarDefault from "../../assets/453009273_1056794469146274_3031692032290871528_n.jpg"
import './comment.css'

export const Comment = ({value}) => {
    
    return (
        <Row style={{marginBottom : "4px"}}>
            <Col>
                <Avatar src={avatarDefault}/>
            </Col>
            <div className="comment">
                <div className="comment-body">
                    <Row className="comment-owner">
                        {value?.user?.userName}
                    </Row>
                    <Row className="comment-content">
                        {value?.content}
                    </Row>
                </div>
                <Row style={{justifyContent: "space-between", maxWidth: "33%"}}>
                    <Col>
                        21 giờ trước
                    </Col>
                    <Col>
                        Thích
                    </Col>
                    <Col>
                        Phản hồi
                    </Col>
                </Row>
            </div>

        </Row>
    )

}