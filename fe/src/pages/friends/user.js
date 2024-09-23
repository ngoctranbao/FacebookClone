import { Button, Image, Row } from "antd"
import "./user.css"

export const UserBox = () => {
    return (
        <div className="user-container">
            <Image
                width={300}
                preview={false}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Row style={{fontWeight: "bold"}}>
                User Name
            </Row>
            <Row>
                17 Bạn chung
            </Row>
            <Button className="friend-button" color="default"  variant="filled" style={{margin: "5px", fontWeight: "bold", backgroundColor: "rgb(177, 214, 246)"}}>
                Thêm bạn bè
            </Button>
            <Button danger variant="outlined" style={{margin: "10px", fontWeight: "bold"}}>
                Gỡ
            </Button>
        </div>
    )
}