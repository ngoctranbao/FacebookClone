import { Avatar, Col, Divider, Image, Modal, Row } from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatarDefault from "../../assets/453009273_1056794469146274_3031692032290871528_n.jpg"
import defaultImage from "../../assets/457484474_1079142673578120_3657026424661788058_n.jpg"
import { faThumbsUp, faComment, faShareFromSquare, faHeart } from "@fortawesome/free-solid-svg-icons"
import './post.css'
import { useContext, useEffect, useState } from "react"
import { Comment } from "./comment"
import { ModalPost } from "./modalpost"
import { createReact, deleteReact, getReact } from "../../services/react"
import { AuthContext } from "../../providers/authProviders"


export const Post = ({value, onCommentClick, comments}) => {

    const { authUser } = useContext(AuthContext)

    const [postReact, setPostReact] = useState(0);
    const [isReact, setIsReact] = useState(false);

    const fetchPostReact = async() => {
        try {
            const res = await getReact({typeOf: "post", parentId: value.id})
            if (res.status === 200) {
                setPostReact(res.data.count)
                const foundMatch = res.data.rows.some(row => authUser?.id === row.ownerId);
                setIsReact(foundMatch); 
            } else {
                console.log(res.status)
            }
        } catch (error) {
            console.log(error)            
        }
    }

    const onClickLikeButton = async() => {
        try {
            if(authUser?.id) {
                if(isReact) {
                    const res = await deleteReact({ownerId: authUser?.id, typeOf: "post", parentId: value.id})
                    setIsReact(false)
                } else {
                    const res = await createReact({ownerId: authUser?.id, typeOf: "post", parentId: value.id})
                    setIsReact(true)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPostReact()
    })

    
    return (
            <div>
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
                    {
                        value?.fileUrl ? 
                        <Image src={encodeURI(value?.fileUrl)} preview={false}/> :
                        <Image src={defaultImage} preview={false}/>
                    }
                    </Row>
                    <Row>
                        <FontAwesomeIcon icon={faHeart}/> {postReact}
                    </Row>
                    <Divider/>
                    <Row className="reaction" style={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
                        <FontAwesomeIcon icon={faThumbsUp} onClick={onClickLikeButton} style={{color: isReact ? 'blue' : 'black' }}/>
                        <FontAwesomeIcon icon={faComment} onClick={onCommentClick}/>
                        <FontAwesomeIcon icon={faShareFromSquare}/>      
                    </Row>
                    {comments &&
                    comments.map((comment, index) => {
                        return(
                            <Comment value={comment}/>
                        )
                    })
                }
            </div>
    )
}

