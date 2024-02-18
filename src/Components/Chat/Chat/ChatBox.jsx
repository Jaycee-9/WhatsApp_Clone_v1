import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

import { AccountContext } from "../../../Context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { getConversation } from "../../../Service/api";
function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [conservation, setConservation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConservation(data);
    };
    getConversationDetails();
  }, [person.sub, account.sub]);

  return (
    <div>
      <ChatHeader person={person} />
      <Messages person={person} conservation={conservation} />
    </div>
  );
}

export default ChatBox;
