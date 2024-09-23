import { Row, Layout, Col, Image, Avatar, Modal } from "antd"
import React, { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../providers/authProviders"
import Sidebar from "../../components/SideBar"
import { Post } from "./post"
import { NewPost } from "./createpost"
import { getPostService } from "../../services/post"
import { ModalPost } from "./modalpost"
import { Comment } from "./comment"
import "./post.css"

const Home = () => {

    const { authUser } = useContext(AuthContext)
    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState(null);

    const fetchPost =  async() => {
        try {
            const res = await getPostService()
            if (res.status === 200) {
                console.log(res.data)
                setPosts(res.data)
            } else {
                console.log(res.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPost()
    },[authUser?.id])


    return (
        <Row style={{display: "flex", justifyContent: "space-between"}}>
            <Col>
                <Sidebar/>
            </Col>
            <Col style={{display: "flex", flexDirection: "column"}}>
                <NewPost/>
                {
                    posts.map((post, index) => {
                        return (
                            <div className="post-container">
                                <Post value={post} onCommentClick={() => {setSelectedPost(post)}}/>
                            </div>
                        )
                    })
                } 
                {selectedPost && 
                    <ModalPost post={selectedPost} onClose={() => {setSelectedPost(null)}}/>
                }          
            </Col>
            <Col>
                Quảng cáo
            </Col>
        </Row>
    )
}

export default Home