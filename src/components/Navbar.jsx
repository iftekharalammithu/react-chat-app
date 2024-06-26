import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Vite Chat</span>
      <div className="user">
        <img src="src/img/download (3).jpg" alt="" />
        <span className="username">jhon</span>
        <button className="logout"> logout</button>
      </div>
    </div>
  );
};

export default Navbar;
