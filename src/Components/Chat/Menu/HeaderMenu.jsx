import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function HeaderMenu({ setDrawer }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (evt) => {
    setOpen(evt.currentTarget);
  };
  return (
    <div className="header-icons">
      <button onClick={handleClick}>
        <MoreVertIcon />
      </button>
      <div>
        <Menu
          anchorEl={open}
          keepMounted={true}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setDrawer(true);
            }}
          >
            Profile
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
export default HeaderMenu;
