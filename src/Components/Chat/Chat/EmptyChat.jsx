import emptyChat from "../../../Public/Images/emptychat.webp";

function EmptyChat() {
  return (
    <div className="emptychat-container">
      <div className="emptychat">
        <div className="emptychat-img">
          <img src={emptyChat} alt="empty chat" />
        </div>
        <div className="emptychat-title">
          <h1>WhatsApp Web</h1>
        </div>
        <div className="emptychat-text">
          <p>
            Send and receive messages without keeping your phone online.
            <br /> Use WhatsApp on up to 4 linked devices and 1 phone at the
            same time.
          </p>
        </div>
      </div>
    </div>
  );
}
export default EmptyChat;
