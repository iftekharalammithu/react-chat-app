import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <span className="logo">Vite Chat</span>
      <div className="user">
        <img src="src/img/download (3).jpg" alt="" />
        <span className="username">jhon</span>
        {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2931979156. */}
        <button onClick={logout} className="logout">
          {" "}
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
