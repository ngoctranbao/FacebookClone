import { Avatar, Col, Divider, Image, Row } from "antd"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatarDefault from "../../assets/453009273_1056794469146274_3031692032290871528_n.jpg"
import defaultImage from "../../assets/457484474_1079142673578120_3657026424661788058_n.jpg"
import { faThumbsUp, faComment, faShareFromSquare, faHeart } from "@fortawesome/free-solid-svg-icons"
import './post.css'


export const Post = () => {
    
    const post = {
        name: "Đài phát thanh",
        avatar: avatarDefault,
        createAt: "10 giờ",
        descriptions: `NGỌT - EP. SUÝT 2
        Đúng 00h00' khuya nay (30/8), Ngọt chính thức cho ra mắt EP. Suýt 2 như lời hẹn với fan trước đó. Tiếp nối EP. Suýt 1, Suýt 2 bao gồm 4 ca khúc:
        06 Quen Lắm - với những giai điệu có phần quen thuộc, lấy cảm hứng từ ca khúc Giấc Mơ Có Thật từng được Lệ Quyên thể hiện rất thành công.
        07 Chiều Hồ Tây - bản nhạc "hòa tấu" không lời duy nhất trong 2 EP 'Suýt 1' và 'Suýt 2'.
        08 Leo Đèo - một ca khúc mang âm hưởng âm nhạc dân gian, Leo Đèo cũng từng được Thắng thể hiện với bản mộc guitar trước đó.
        09 Chuyện Thường - ca khúc như phần tiếp theo của “Bạn Thỏ Tivi”, khi con người đã lớn, và phải dành chia tay cho cho “bạn dễ thương của tôi”.
        EP. Suýt 2 - Ngọt đã chính thức ra mắt, xin mời cả nhà.`,
        react: 2000,
    }
    
    return (
        <div style={{width: "500px"}} className="post-container">
                <Row className="post-infor" style={{margin: "4px"}}>
                    <Col>
                        <Avatar src={post.avatar} size={48}/>
                    </Col>
                    <Col>
                        <Row style={{fontWeight: "bolder"}}>{post.name}</Row>
                        <Row style={{fontWeight: "lighter"}}>{post.createAt}</Row>
                    </Col>
                </Row>
                <Row className="description" style={{margin: "10px"}}>
                    {post.descriptions}
                </Row>
                <Row className="image">
                    <Image src={defaultImage}/>
                </Row>
                <Row>
                    <FontAwesomeIcon icon={faHeart} /> 243
                </Row>
                <Divider/>
                <Row className="reaction" style={{display: "flex", justifyContent: "space-around", alignContent: "center"}}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faShareFromSquare} />      
                </Row>
        </div>
    )
}

