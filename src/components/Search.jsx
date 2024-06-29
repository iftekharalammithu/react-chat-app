import React, { useContext, useState } from "react";
import { db, databaseref } from "../firebase";
import { get, child } from "firebase/database";
import { Authcontext } from "../context/authcontext";

const Search = () => {
  const [username, setusername] = useState();
  const [user, setuser] = useState();
  const [error, seterror] = useState(false);
  const { currentuser } = useContext(Authcontext);

  const handelsearch = async () => {
    // console.log("working");

    try {
      if (username) {
        setuser(null);
        const usersRef = databaseref(db);
        get(child(usersRef, username)).then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log(userData);
            console.log(currentuser);
            setuser(userData);
            seterror(false);
          } else {
            seterror(true);
            setuser(null);
          }
        });
      } else {
        seterror(false);
      }
    } catch (error) {
      console.log(error);
      seterror(true);
    }
  };
  const handelselect = () => {
    console.log(user);
  };

  const handelkey = (e) => {
    e.code === "Enter" && handelsearch();
  };

  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          onKeyDown={handelkey}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Find A User"
        />
      </div>
      {error ? (
        <p style={{ color: "red", paddingLeft: "10px" }}>User Not Found!</p>
      ) : (
        ""
      )}
      {user && (
        <div className="userchat" onClick={handelselect}>
          <img src={user.photoURL} alt="user-profile" />
          <div className="userinfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
