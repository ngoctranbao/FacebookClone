import { Modal } from "antd"
import { Post } from "./post"
import { Comment } from "./comment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/authProviders";
import { createCommentService, getPostCommentService } from "../../services/comment";

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
        <Modal 
            onClose={onClose}
            onCancel={onClose}
            footer={[
                <input type="text" placeholder="Write a comment..." onChange={(e) => setNewComment(e.target.value)} value={newComment}/>,
                <button onClick={() => {createComment(newComment)}}>Post Comment</button>
            ]}
            open={true}
        >
            <div className="modal-content">   
                <Post value={post} onCommentClick={() => {}} comments={comments}/>
            </div>
        </Modal> 
    );
  };