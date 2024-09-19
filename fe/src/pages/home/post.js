import { Avatar, Col, Divider, Image, Modal, Row } from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatarDefault from "../../assets/453009273_1056794469146274_3031692032290871528_n.jpg"
import defaultImage from "../../assets/457484474_1079142673578120_3657026424661788058_n.jpg"
import { faThumbsUp, faComment, faShareFromSquare, faHeart } from "@fortawesome/free-solid-svg-icons"
import './post.css'
import { useEffect, useState } from "react"
import { Comment } from "./comment"
import { ModalPost } from "./modalpost"


export const Post = ({value, onCommentClick}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
            <div className="post-container">
                    <Row className="post-infor" style={{margin: "4px"}}>
                        <Col>
                            <Avatar src={avatarDefault} size={48}/>
                        </Col>
                        <Col>
                            <Row style={{fontWeight: "bolder"}}>{value?.user?.userName}</Row>
                            <Row style={{fontWeight: "lighter"}}>{value?.updatedAt}</Row>
                        </Col>
                    </Row>
                    <Row className="description" style={{margin: "10px"}}>
                        {value.content}
                    </Row>
                    <Row className="image">
                        <Image src={defaultImage}/>
                    </Row>
                    <Row>
                        <FontAwesomeIcon icon={faHeart} /> {value.reactNumber}
                    </Row>
                    <Divider/>
                    <Row className="reaction" style={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
                        <FontAwesomeIcon icon={faThumbsUp}/>
                        <FontAwesomeIcon icon={faComment} onClick={onCommentClick}/>
                        <FontAwesomeIcon icon={faShareFromSquare}/>      
                    </Row>

            </div>
    )
}

