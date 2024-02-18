import { useEffect } from "react";

import { Box, styled, InputBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { uploadFile } from "../../../Service/api";

const Container = styled(Box)`
  height: 89.9px;
  background: #ededed;
  width: 96.6%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const ClipIcon = styled(AddIcon)`
  transform: "rotate(40deg)";
`;

const Footer = ({
  sendText,
  message,
  userMessage,
  setFile,
  file,
  setImage,
}) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setImage(response.data);
      }
    };
    getImage();
  }, [file, setImage]);

  const onFileChange = (e) => {
    userMessage(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  return (
    <Container>
      <InsertEmoticonIcon />
      <label htmlFor="fileInput">
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />

      <Search>
        <InputField
          placeholder="Type a message"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => userMessage(e.target.value)}
          onKeyUp={sendText}
          value={message}
        />
      </Search>
      {message || file ? (
        <p>
          <SendIcon onClick={sendText} />
        </p>
      ) : (
        <p>
          <MicIcon />
        </p>
      )}
    </Container>
  );
};

export default Footer;
