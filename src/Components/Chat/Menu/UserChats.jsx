import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../Context/AccountProvider";
import { setConversation, getConversation } from "../../../Service/api";
import { formatDate } from "../../../utils/commonUtils";

function UserChats({ user }) {
  const { setPerson, account, newMsgFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationMessage();
  }, [newMsgFlag, account.sub, user.sub]);

  return (
    <>
      <div className="userchat-conatiner" onClick={getUser}>
        <div className="userchat-card">
          <div className="userchat-img">
            <img src={user.picture} alt="user" />
          </div>
          <div className="userchat-name">
            <p>{user.name}</p>
          </div>
        </div>
        <div className="userchat-msg">
          <p>{message?.text?.includes("localhost") ? "media" : message.text}</p>
          <p> {formatDate(message?.timestamp)}</p>
        </div>
      </div>
      <hr id="userchat-hr" />
    </>
  );
}
export default UserChats;
