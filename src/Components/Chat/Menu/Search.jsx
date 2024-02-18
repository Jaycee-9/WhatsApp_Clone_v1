import SearchIcon from "@mui/icons-material/Search";

import { InputBase } from "@mui/material";

function Search({ setText }) {
  const handleSearch = (evt) => {
    setText(evt.target.value);
  };
  return (
    <div className="search">
      <div className="search-container">
        <div>
          <SearchIcon
            style={{ padding: "4px", marginRight: "20px", color: "#919191" }}
          />
        </div>
        <div>
          <InputBase
            placeholder="Search or start new chat"
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
export default Search;
