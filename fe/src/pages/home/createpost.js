import { useContext, useState } from "react"
import { AuthContext } from "../../providers/authProviders/index"
import userAvatar from "../../assets/453178253_471506465671661_2781666950760530985_n.png"
import TextArea from "antd/es/input/TextArea"
import { createPostService } from "../../services/post"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons"
import { uploadImageFile } from "../../services/file"
const { Col, Avatar, Input, Row, Modal, Divider } = require("antd")

export const NewPost = () => {
    const { authUser } = useContext(AuthContext)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [content, setContent] = useState('')

    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handelOk = async (value) => {
        try {
            if(value !== '' && authUser.id) {
                var fileUrl
                if(file) {
                    const response = await uploadImageFile(file)
                    if (response.status === 200) {
                        fileUrl = response.fileUrl
                    }
                }
                const res = await createPostService({content: value, userId: authUser.id, fileUrl: fileUrl})
                if (res.status === 200) {
                    console.log(`Create post success: ${res.data}`)
                } else {
                    console.log(res)
                }
            }
            setContent('')
            setIsModalOpen(false)
        } catch (error) {
          console.error('Error uploading image:', error);
        }
    }

    return(
        <Row style={{margin: "5px"}}>
            <Col>
                <Avatar src={userAvatar}/>
            </Col>
            <Col span={22} style={{marginLeft: "4px"}}>
                <Input placeholder="Hey dude, what are you thingking ?" onClick={() => {setIsModalOpen(true)}}/>
            </Col>
            <Modal
                open={isModalOpen}
                onOk={() => {handelOk(content)}}
                onCancel={() => {setIsModalOpen(false)}}
                onClose={() => {setIsModalOpen(false)}}
            >
                <Row>
                    Tạo bài viết
                </Row>
                <Divider/>
                <Avatar src={userAvatar}/>
                <TextArea rows={10} onChange={(e) => setContent(e.target.value)} value={content}/>
                <label style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} size="2x" />
                    <input
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </Modal>
        </Row>
    )
}