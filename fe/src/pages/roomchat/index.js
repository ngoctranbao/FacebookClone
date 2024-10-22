import { Col, Row, Layout, Input, Image, Empty } from "antd";
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import "./roomchat.css";
import {
  InfoCircleOutlined,
  DeleteOutlined,
  PaperClipOutlined,
  SendOutlined,
  FormOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Message from "./message";
import ChatList from "./sidebarChat";
import { SocketContext } from "../../providers/socketProviders";
import {
  getMessagesOfRoomChatService,
  sendMessageToRoomService,
} from "../../services/roomchat";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/authProviders";

const { Footer, Content } = Layout;
const { TextArea } = Input;

const RoomChat = () => {
  const { authUser } = useContext(AuthContext);
  const { id } = useParams();
  const { socket, roomChats, getRoomChatForMe } = useContext(SocketContext);
  const [roomChat, setRoomChat] = useState();
  const [messages, setMessages] = useState([]);
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const chatWindowRef = useRef(null);

  const fetchMessageOfRoom = async (roomChatId) => {
    try {
      const res = await getMessagesOfRoomChatService(roomChatId);
      if (res.status === 200) {
        console.log(res.data)
        setMessages(res.data);
      }
      setTimeout(() => {
        chatWindowRef.current.scrollTo(0, chatWindowRef.current.scrollHeight);
      }, 50);
    } catch (error) {
      console.log(error);
    }
  };

  // const addMessageToSender = () => {
  //   try {
  //     setTimeout(() => {
  //       chatWindowRef.current.scrollTo(0, chatWindowRef.current.scrollHeight);
  //     }, 50);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (roomChats.length > 0) {
      for (var room of roomChats) {
        if (String(room.id) === String(id)) {
          setRoomChat(room);
        }
      }
    }
  }, [roomChats, id]);

  // useEffect(() => {
  //   if (id > 0 && authUser?.id > 0) {
  //     socket.emit("leave-room", id, authUser?.id);
  //     socket.emit("join-room", id, authUser?.id);
  //   }

  //   socket.on("new-message", async (data) => {
  //     if (data !== authUser.id) {
  //       await fetchMessageOfRoom(id);
  //     }
  //   });

  //   socket.on("update-term", async (data) => {
  //     if (Number(data?.roomChatId) === Number(id)) {
  //       await fetchContractById(id);
  //     }
  //   });

  //   return () => {
  //     socket.off("new-message");

  //     socket.off("update-term");
  //   };
  // }, [id, authUser]);

  useEffect(() => {
    if (id > 0) {
      fetchMessageOfRoom(id);
    }
  }, [id]);


  const switchRoomChat = (chatId) => {
    navigate(`/messages/${chatId}`);
  };


  const sendMessage = async (data) => {
    try {
      if ((data?.content && data?.content?.length > 0) || data?.files?.length > 0) {
        const res = await sendMessageToRoomService(data);
        if (res.status === 200) {
          setContent("");
          setFiles([]);
          fetchMessageOfRoom(id);
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Layout className="room-chat">
      <ChatList chatList={roomChats} switchRoomChat={switchRoomChat} />
      <Layout className="content-room-chat">
        <Row className="msg-header">
          <Col className="text-bold-18 ">
            <Row>
              <Col>{roomChat?.name ? roomChat.name : "RoomChat"}</Col>
            </Row>
          </Col>
          <Col>
            <Row gutter={[16]}>
              <Col className="text-bold-18 wrap-icon">
                <FormOutlined />
              </Col>
              <Col className="text-bold-18 wrap-icon">
                <InfoCircleOutlined />
              </Col>
            </Row>
          </Col>
        </Row>
        <Content className="msg-body" ref={chatWindowRef}>
          {messages?.length > 0 ? (
            messages.map((message, index) => {
              return <Message message={message} key={`chat${index}`} />;
            })
          ) : (
            <Row style={{ justifyContent: "center" }}>
              <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                  height: 200,
                }}
                description="Chưa có tin nhắn nào!"
              ></Empty>
            </Row>
          )}
        </Content>
        <Footer className="input-message">
          <Col span={24}>
            {files.length > 0 && (
              <Row style={{ paddingBottom: 10, gap: 5 }}>
                {files.map((file, index) => {
                  return (
                    <Col index={"keyImage" + index}>
                      <Image
                        src={file?.url}
                        style={{ height: 80, width: 80 }}
                      />
                    </Col>
                  );
                })}
              </Row>
            )}
            
              <Row className="wrap-input-message">
                <Col span={1}>
                  <Row style={{ justifyContent: "center" }}>
                    <label className="icon-input" for="input-image-message">
                      <PaperClipOutlined />
                    </label>
                    <input
                      type="file"
                      id="input-image-message"
                      multiple
                      accept="image/*"
                    />
                  </Row>
                </Col>
                <Col span={22}>
                  <TextArea
                    placeholder="Gửi đoạn chat"
                    value={content}
                    onChange={(value) => {
                      setContent(value.target.value);
                    }}
                    autoSize
                  />
                </Col>
                <Col span={1}>
                  <Row
                    className="icon-input"
                    style={{ justifyContent: "center" }}
                  >
                    <SendOutlined
                      className="send-message-button"
                      onClick={() => {
                        sendMessage({
                          content: content,
                          roomChatId: id,
                          files: files,
                        });
                      }}
                    />
                  </Row>
                </Col>
              </Row>
          </Col>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default RoomChat;