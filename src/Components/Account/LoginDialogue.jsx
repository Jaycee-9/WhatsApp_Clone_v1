import { Dialog, Box, List, ListItem, Typography, styled } from "@mui/material";
import qrcode from "../../Public/Images/qrcode.jpg";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext } from "react";

//api calls

import { addUser } from "../../Service/api";

//material ui styling
const dialogStyle = {
  height: "90%",
  marginTop: "8%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};

const Component = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 60px;
`;

const Conatiner = styled(Box)`
  padding: 60px 0px 56px 0px;
`;

const QrCode = styled("img")({
  height: 264,
  width: 264,
  marginLeft: 40,
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
`;

const StylesList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

function LoginDialogue() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSccess = async (res) => {
    const decode = jwtDecode(res.credential);
    setAccount(decode);
    await addUser(decode);
  };
  const onLoginError = (res) => {
    console.log(`Login Failed ${res}`);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Conatiner>
          <Title> To use WhatsApp on Your Computer</Title>
          <StylesList>
            <ListItem>1. Open WhatsApp on Your Computer</ListItem>
            <ListItem>2. Tap Menu settings and select WhatsApp Web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StylesList>
        </Conatiner>
        <Box style={{ position: "relative" }}>
          <QrCode src={qrcode} alt="Bar-code" />
          <Box
            style={{
              position: "absolute",
              top: "40%",
              transform: "translateX(30%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialogue;
