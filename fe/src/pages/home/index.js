import { Row, Layout, Col, Image, Avatar } from "antd"
import React, { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../providers/authProviders"
import Sidebar from "../../components/SideBar"
import { Post } from "./post"
import { NewPost } from "./newpost"
import { getPostService } from "../../services/post"

const Home = () => {

    const { authUser } = useContext(AuthContext)
    const [posts, setPosts] = useState([])

    const fetchPost =  async() => {
        const res = await getPostService()
        if (res.status === 200) {
            console.log(res.data)
            setPosts(res.data)
        } else {
            console.log(res.status)
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
                            <Post value={post} key={index}/>
                        )
                    })
                }
            </Col>
            <Col>
                Quảng cáo
            </Col>
        </Row>
    )
}

export default Home