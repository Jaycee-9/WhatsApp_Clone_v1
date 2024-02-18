import { Dialog, Box, styled } from "@mui/material";

import Menu from "./Menu/Menu";
import EmptyChat from "./Chat/EmptyChat";
import ChatBox from "./Chat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../Context/AccountProvider";

//mui styles
const dialogStyle = {
  height: "96%",
  width: "100%",
  margin: "20px",
  maxWidth: "84%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};

const Layout = styled(Box)`
  display: flex;
  height: 100%;
`;

const Leftcomponent = styled(Box)`
  min-width: 480px;
  width: 500px;
`;

const Rightcomponent = styled(Box)`
  width: 75%;
  min-width: 500px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

function ChatDialog() {
  const { person } = useContext(AccountContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Layout>
        <Leftcomponent>
          <Menu />
        </Leftcomponent>
        <Rightcomponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </Rightcomponent>
      </Layout>
    </Dialog>
  );
}

export default ChatDialog;
