import { createContext, useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = () => {
  const [account, setAccount] = useState("");
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [newMsgFlag, setNewMsgFlag] = useState(false);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        person,
        setPerson,
        socket,
        activeUsers,
        setActiveUsers,
        newMsgFlag,
        setNewMsgFlag,
      }}
    >
      <Outlet />
    </AccountContext.Provider>
  );
};

export default AccountProvider;
