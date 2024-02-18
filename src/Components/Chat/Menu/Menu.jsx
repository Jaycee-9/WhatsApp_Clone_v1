import Header from "./Header";
import Conversation from "./Conversation";
import Search from "./Search";
import { useState } from "react";
function Menu() {
  const [text, setText] = useState("");
  return (
    <div>
      <Header />
      <Search setText={setText} />
      <Conversation text={text} />
    </div>
  );
}

export default Menu;
