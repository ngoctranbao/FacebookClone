import { createContext } from "react";
import React from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(process.env.REACT_APP_BE_URL, { reconnect: true });

  const socketDisconnect = () => {
    socket.disconnect();
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        socketDisconnect,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};