// Import hooks.
import { useState } from "react";

// Import assets from the tutorial.
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

// Import components.
import SignIn from "../../components/SignIn/SignIn";

// Import CSS
import "./Header.css";
import { Link } from "react-router-dom";
let userHash = localStorage.getItem("TOKEN")


export default function BasicMenu({ auth }) {

  const [login, setLogin] = useState(false)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const avatar = auth ? localStorage.getItem("AVATAR") : null

  function handleClick(event) {
    if (auth) {
      setAnchorEl(event.currentTarget);
    } else {
      setLogin(true);
    }
  };

  function handleLogout() {
    localStorage.clear();
    window.location.reload();
  }

  function handleClose() {
    setAnchorEl(null);
  };

  function receiveData(visibility) {
    setLogin(false)
  }


  return (
    <>
      <div>
        <div id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined} onClick={handleClick} className="profile-menu-flex">
          <MenuRoundedIcon /> {auth ? <img alt="avatar" src={avatar} className="avatar-img" /> : <AccountCircleRoundedIcon />}
        </div>
        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ "aria-labelledby": "basic-button" }} sx={{ ".MuiPaper-root": { minWidth: "200px", borderRadius: "1rem", boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)" }, }}>
          <Link to={`user/profile/${userHash}`}>
          <MenuItem className="menu-items" onClick={handleClose}>Profile</MenuItem>
          </Link>
          <Link 
          to="/create-product" 
          className="menu-items" 
          onClick={handleClose}>Create Post</Link>
          <MenuItem className="menu-items" onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
      {login && <SignIn visibility={true} sendDataToParent={receiveData}></SignIn>}
    </>
  );
}