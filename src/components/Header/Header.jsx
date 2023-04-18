// Import CSS.
import "./Header.css";

// Import assets.
import logo from "../../../src/assets/icon.png";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Link } from "react-router-dom";

// Import hooks.
import { useRef, useState } from "react";

// Import components.
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";

function Header({ auth }) {
  const [search, setSearch] = useState("")

  const searchInput = useRef()

  function handleSearch(e) {
    console.log(searchInput.current.value)
  }

  return (
    <div className="navbar">
      <Link to={`/`}>
        <img src={logo} alt="logo" className="navbar-logo" />
      </Link>

      <div className="search-bar">
        <input
          type="text"
          className="search-field"
          placeholder="Go diving..."
          onChange={(e) => setSearch(e.target.value)}
          ref={searchInput}
        />
        <div className="search-icon-div" onClick={handleSearch}>
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-div">
          <BasicMenu auth={auth} />
        </div>
      </div>
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
