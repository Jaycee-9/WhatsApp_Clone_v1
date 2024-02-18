import { AccountContext } from "../../../Context/AccountProvider";
import { useContext } from "react";

function Profile() {
  const { account } = useContext(AccountContext);

  return (
    <div className="profile-container">
      <div className="profile-container-img">
        <img src={account.picture} alt="user" />
      </div>
      <div className="profile-container-p">
        <p>Your name</p>
        <p>{account.name}</p>
      </div>
      <div className="profile-container-alert">
        <p>
          This is not your username or pin. This name will be visible to your
          WhatsApp contacts
        </p>
      </div>
      <div className="profile-container-p">
        <p>About</p>
        <p>{account.name}</p>
      </div>
    </div>
  );
}

export default Profile;
