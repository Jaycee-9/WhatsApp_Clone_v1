import { useContext } from "react";
import { formatDate, download } from "../../../utils/commonUtils";
import { AccountContext } from "../../../Context/AccountProvider";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import pdf from "../../../Public/Images/pdf.webp";

function TextMessages({ text }) {
  const { account } = useContext(AccountContext);

  return (
    <>
      {account.sub === text.senderId ? (
        <div className="senders-container">
          {text.type === "file" ? (
            <ImageMessage text={text} />
          ) : (
            <Message text={text} />
          )}
        </div>
      ) : (
        <div className="receiver-container">
          {text.type === "file" ? (
            <ImageMessage text={text} />
          ) : (
            <Message text={text} />
          )}
        </div>
      )}
    </>
  );
}

const Message = ({ text }) => {
  return (
    <>
      <li>{text.text}</li>
      <p>{formatDate(text.createdAt)}</p>
    </>
  );
};

const ImageMessage = ({ text }) => {
  return (
    <div>
      {text?.text?.includes(".pdf") ? (
        <div className="pdf-handler">
          <img src={pdf} alt="pdf" />
          <p>{text.text.split("/").pop()}</p>
        </div>
      ) : (
        <img
          src={text.text}
          alt={text.text}
          style={{ width: "260px", objectFit: "cover" }}
        />
      )}
      <div className="downloader">
        <p>{formatDate(text.createdAt)}</p>
        <FileDownloadIcon onClick={(evt) => download(evt, text.text)} />
      </div>
    </div>
  );
};
export default TextMessages;
