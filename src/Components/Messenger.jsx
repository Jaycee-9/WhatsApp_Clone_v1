import { AppBar, Toolbar, Box } from "@mui/material";

//Styles
import "../App.css";

//Components
import LoginDialogue from "./Account/LoginDialogue";
import { AccountContext } from "../Context/AccountProvider";
import ChatDialog from "./Chat/ChatDialog";
import { useContext } from "react";

function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Box className="box-dialog">
      {account ? (
        <>
          <AppBar id="chat-bar">
            <Toolbar></Toolbar>
          </AppBar>
          <ChatDialog />
        </>
      ) : (
        <>
          <AppBar id="appBar">
            <Toolbar></Toolbar>
          </AppBar>
          <LoginDialogue />
        </>
      )}
    </Box>
  );
}

export default Messenger;
