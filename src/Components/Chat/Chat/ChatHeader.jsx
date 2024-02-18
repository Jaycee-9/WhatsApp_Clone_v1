import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import defaultImg from "../../../Public/Images/defaultImage.jpg";
import { AccountContext } from "../../../Context/AccountProvider";
import { useContext } from "react";

function ChatHeader({ person }) {
  const { activeUsers } = useContext(AccountContext);

  return (
    <div className="header-container">
      <div className="header-left">
        {person.picture ? (
          <img src={person.picture} alt="dp" />
        ) : (
          <img src={defaultImg} alt="dp" />
        )}
        <p>{person.name}</p>
        <p>
          {activeUsers?.find((user) => user.sub === person.sub) ? "Online" : ""}
        </p>
      </div>
      <div className="header-right">
        <button>
          <SearchIcon />
        </button>
        <button>
          <MoreVertIcon />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
