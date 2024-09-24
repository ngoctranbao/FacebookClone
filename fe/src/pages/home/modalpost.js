import { Post } from "./post"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authProviders";
import { createCommentService, getPostCommentService } from "../../services/comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./modal.css"
import { Avatar, Button, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

export const ModalPost = ({ post, onClose }) => {

    const[comments, setComments] = useState([])
    const[newComment, setNewComment] = useState('')
    const { authUser } = useContext(AuthContext)

    const fetchComment = async () => {
        try {
            const postId = post.id;
            const res = await getPostCommentService(postId)
            if(res.status === 200) {
                setComments(res.data)
            } else {
                console.log(res.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const createComment = async(value) => {
        try {
            console.log(`value: ${value} and auth user: ${authUser?.id}`)
            if(authUser.id && value) {
                const res = await createCommentService({content: value, ownerId: authUser.id, postId: post.id})
                if(res.status === 200) {
                    await fetchComment()
                    setNewComment('')
                } else (
                    console.log(res.status)
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComment()
    },[post.id])

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2> Bài viết của {post.user.userName}</h2>
                    <button onClick={onClose} className="close-button">
                        &times;
                    </button>
                </div>
                <div className="modal-body">
                    <Post value={post} onCommentClick={() => {}} comments={comments}/>
                </div>
                <div className="modal-footer">
                    <Avatar/>
                    <Input 
                        type="text" 
                        placeholder={`Bình luận dưới tên ${authUser.userName}`}
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                        suffix={<FontAwesomeIcon icon={faPaperPlane} onClick={() => {createComment(newComment)}}/>}
                    />
                </div>
            </div>
        </div>
    );
  };
 