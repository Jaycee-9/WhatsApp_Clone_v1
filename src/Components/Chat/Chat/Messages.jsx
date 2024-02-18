import Footer from "../Chat/Footer";
import { AccountContext } from "../../../Context/AccountProvider";
import { useContext, useState, useEffect, useRef } from "react";
import { newMessage, getMessages } from "../../../Service/api";
import TextMessages from "./TextMessages";

function Messages({ person, conservation }) {
  const [message, userMessage] = useState("");
  const { account } = useContext(AccountContext);
  const [text, setText] = useState([]);
  const [newMsgFlag, setNewMsgFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    const getMessageDetails = async () => {
      const data = await getMessages(conservation._id);
      setText(data);
    };

    conservation._id && getMessageDetails();
  }, [person._id, conservation._id, newMsgFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [message, text]);

  const sendText = async (evt) => {
    const keyCode = evt.keyCode;
    if ((keyCode === 13 || evt.type === "click") && message) {
      let userText = {};
      if (!file) {
        userText = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conservation._id,
          type: "text",
          text: message,
        };
      } else {
        userText = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conservation._id,
          type: "file",
          text: image,
        };
      }

      await newMessage(userText);
      userMessage("");
      setFile("");
      setImage("");
      setNewMsgFlag((prevState) => !prevState);
    }
  };

  return (
    <div className="message-container">
      <div className="message-inside" ref={scrollRef}>
        <ul style={{ listStyleType: "none" }}>
          {text &&
            text.map((text) => <TextMessages key={text._id} text={text} />)}
        </ul>
      </div>
      <Footer
        sendText={sendText}
        userMessage={userMessage}
        message={message}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </div>
  );
}

export default Messages;
