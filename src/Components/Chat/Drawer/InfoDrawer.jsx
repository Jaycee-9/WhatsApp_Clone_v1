import { Drawer } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Profile from "./Profile";

const drawerStyle = {
  left: 155,
  top: 20,
  height: "95%",
  width: 400,
  borderRadius: "2px",
  boxShadow: "none",
};

function InfoDrawer({ open, setDrawer }) {
  const handleClose = () => {
    setDrawer(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <div className="drawer-top">
        <p>
          <ArrowBackIcon onClick={handleClose} />
        </p>
        <p>Profile</p>
      </div>
      <div className="drawer-bottom">
        <Profile />
      </div>
    </Drawer>
  );
}
export default InfoDrawer;
