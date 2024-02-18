import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../Service/api";
import { AccountContext } from "../../../Context/AccountProvider";
import UserChats from "./UserChats";

function Conversation({ text }) {
  let [user, setUser] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      const filteredData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUser(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account, socket, setActiveUsers]);

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: "0px 10px" }}>
        {user &&
          user.map((user) => {
            if (user.sub !== account.sub) {
              return (
                <li key={user._id}>
                  <UserChats user={user} />
                </li>
              );
            }
            return null; // Add this line to handle the case where the condition is not met
          })}
      </ul>
    </div>
  );
}

export default Conversation;
