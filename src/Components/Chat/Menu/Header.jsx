import { useContext, useState } from "react";
import { AccountContext } from "../../../Context/AccountProvider";

import ChatIcon from "@mui/icons-material/Chat";

import HeaderMenu from "./HeaderMenu";

import InfoDrawer from "../Drawer/InfoDrawer";

function Header() {
  const { account } = useContext(AccountContext);
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(true);
  };
  return (
    <>
      <div className="header">
        <div className="header-img">
          <img src={account.picture} alt="profile" onClick={toggleDrawer} />
        </div>
        <div className="header-icons">
          <button>
            <ChatIcon />
          </button>
        </div>
        <HeaderMenu setDrawer={setDrawer} />
      </div>

      <InfoDrawer open={drawer} setDrawer={setDrawer} />
    </>
  );
}
export default Header;
