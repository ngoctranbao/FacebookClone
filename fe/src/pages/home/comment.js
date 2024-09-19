import { Avatar, Col, Row } from "antd"
import avatarDefault from "../../assets/453009273_1056794469146274_3031692032290871528_n.jpg"

export const Comment = ({value}) => {
    
    return (
        <Row>
            <Col>
                <Avatar src={avatarDefault}/>
            </Col>
            <Col>
                <Row>
                    {value?.user?.userName}
                </Row>
                <Row>
                    {value?.content}
                </Row>
            </Col>

        </Row>
    )

}