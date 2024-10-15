import { Button, Image, Row } from "antd"
import "./user.css"
import { createFriendService, deleteFriendService } from "../../services/friend"
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/authProviders"

export const UserBox = ({value, onRemove}) => {

    const { authUser } = useContext(AuthContext)
    const [add, setAdd] = useState(true)

    const addFriend = async() => {
        try {
            if(authUser?.id) {
                // const res = await createFriendService({firstId: authUser?.id, secondId: value.id})
                // if(res.status === 200) {
                // }
                setAdd(false)
            }
        } catch (error) {
            
        }
    }

    const deleteFriend = async() => {
        try {
            if(!add) {
                const res = await deleteFriendService({firstId: authUser?.id, secondId: value.id})
                if(res.status === 200) {
                    setAdd(true)
                }
            } else {
                onRemove()
            }
        } catch (error) {
            
        }
    }


    return (
        <div className="user-container">
            {
                value?.avatar ?
                <Image width={300} preview={false} src={value.avatar}/>
                :
                <Image
                    width={300} preview={false} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            }
            <Row style={{fontWeight: "bold"}}>
                {value?.userName}
            </Row>
            <Row>
                17 Bạn chung
            </Row>
            { add &&
                <Button onClick={addFriend}
                    className="friend-button"
                    color="default"
                    variant="filled"
                    style={{margin: "5px", fontWeight: "bold", backgroundColor: "rgb(177, 214, 246)"}}
                >
                    Thêm bạn bè
                </Button>
            }
            <Button onClick={deleteFriend} danger variant="outlined" style={{margin: "10px", fontWeight: "bold"}}>
                {
                    add ? "Gỡ" : "Hủy"
                }
            </Button>
        </div>
    )
}