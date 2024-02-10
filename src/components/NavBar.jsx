import React, { useContext, useState } from "react";
import "./NavBar.css";
import { Routes, Route, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import userIcon from "../assets/userIcon.png";
import { UserData } from "../App";

// Registration button component
function RegisterButton() {
  const { user } = useContext(UserData);
  return (
    <div id="userInfoButtons" className="flex items-center relative">
      {user.fname && <UserInfo userData={user} />}
      <Link to="/register">
        <button className="navButton">Register</button>
      </Link>
    </div>
  );
}

function UserInfo({ userData }) {
  const [profileDisplay, setProfileDisplay] = useState("none");

  return (
    <div id="profileInfo">
      <button
        id="userButton"
        onClick={() => {
          setProfileDisplay("block");
        }}
      >
        <img src={userIcon} id="userIcon" alt="userIcon" />
      </button>
      <div id="userInfo" className={profileDisplay}>
        <p className="font-semibold text-blue-500">User:</p>
        <p>{`${userData.fname} ${userData.lname}`}</p>
        <br />
        <p className="font-semibold text-blue-500">E-mail:</p>
        <p>{userData.email}</p>
      </div>
      <div
        id="coverDiv"
        className={profileDisplay}
        onClick={() => {
          setProfileDisplay("none");
        }}
      ></div>
    </div>
  );
}
// Home button component
function HomeButton() {
  return (
    <Link to="/">
      <button className="navButton">Home</button>
    </Link>
  );
}

// Nav var component
function NavBar() {
  return (
    <nav id="navBar" className="flex items-center bg-white justify-between">
      <Link to="/">
        <img src={Logo} alt="" id="logo" />
      </Link>

      <Routes>
        <Route path="/" element={<RegisterButton />} />
        <Route path="/register" element={<HomeButton />} />
      </Routes>
    </nav>
  );
}

export default NavBar;
