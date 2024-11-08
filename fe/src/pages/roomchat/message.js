import { Row, Col, Avatar, Tooltip } from "antd";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/authProviders";
import "./message.css";

const Message = ({
  message = { content: "message", senderId: 1 },
  key = "chat1",
}) => {
  const { authUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(message)
  }, [])

  return (
    <Row
      className="msg"
      style={{
        flexDirection: `${
          message?.senderId === authUser?.id ? "row-reverse" : "row"
        }`,
      }}
      key={key}
    >
        <Col>
          <Avatar
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
          >
            U
          </Avatar>
        </Col>
      <Col style={{ paddingLeft: 12 }}>
        {/* <Tooltip title={"Time"} placement="left" arrow={false}> */}
          {/* {message?.messageFiles?.length > 0 && (
            <Row
              style={{
                justifyContent: `${
                  message.userId === authUser.id ? "end" : "start"
                }`,
                paddingBottom: 8,
                gap: 3,
              }}
              gutter={[3, 3]}
            >
              {message.messageFiles.map((image, index) => {
                return (
                  <ImageCustom
                    src={process.env.REACT_APP_HOST_BE + "/" + image.url}
                    index={"messageImage" + index}
                    className="message-image"
                  />
                );
              })}
            </Row>
          )} */}
          <Row
            style={{
              justifyContent: `${
                message.senderId === authUser.id ? "end" : "start"
              }`,
            }}
          >
            {message?.content}
          </Row>
      </Col>
    </Row>
  );
};

export default Message;