import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Authcontext } from "../context/authcontext";

const Navbar = () => {
  const { currentuser } = useContext(Authcontext);
  const navigate = useNavigate();
  // console.log(currentuser);

  const logout = () => {
    navigate("/login");
  };
  return (
    <div className="navbar">
      <span className="logo">Vite Chat</span>
      <div className="user">
        <img src={currentuser.photoURL} alt="" />
        <span className="username">{currentuser.displayName}</span>
        <button onClick={() => signOut(auth)} className="logout">
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
