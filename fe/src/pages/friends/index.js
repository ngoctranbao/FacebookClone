import React, { useContext, useEffect, useState } from "react"
import Sidebar from "../../components/SideBar"
import { Col, Grid } from "antd"
import { UserBox } from "./user"
import { AuthContext } from "../../providers/authProviders"
import { createFriendService, getSuggestFriend } from "../../services/friend"

const Friend = () => {

    const [friendList, setFriendList] = useState([])
    const {authUser} = useContext(AuthContext)

    const fetchSuggestFriendList = async() => {
        try {
            if(authUser?.id) {
                const res = await getSuggestFriend({id: authUser.id})
                setFriendList(res.data) 
                console.log(res.data)
            }
        } catch (error) {
            
        }
    }

    const removeFriendSuggest = (index) => {
        setFriendList(friendList => friendList.filter((friend, i) => i !== index));
    };    

    useEffect(() => {
        fetchSuggestFriendList()
    },[authUser?.id])


    return (
        <div style={{width : "100%", height: "100%", display: "flex", justifyContent: "space-between"}}>
            <Col>
                <Sidebar/>
            </Col>
            <Col>
                <h2> Những người bạn có thể biết</h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
                {
                    friendList.map((friend, index) => {
                        return (
                            <UserBox value={friend} onRemove={() => {removeFriendSuggest(index)}}/>
                        )
                    })
                    
                } 
                </div>
            </Col>
        </div>
    )
}

export default Friend