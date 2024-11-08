import { Avatar, Col, Row } from "antd"
import avatarDefault from "../../assets/453009273_1056794469146274_3031692032290871528_n.jpg"
import './comment.css'
import { useContext } from "react"
import { AuthContext } from "../../providers/authProviders"

export const Comment = ({value}) => {

    const {formatTime} = useContext(AuthContext)

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
                        {formatTime(value?.updatedAt)}
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