import React, { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [username, setusername] = useState();
  const [user, setuser] = useState();
  const [error, seterror] = useState(false);

  const handelsearch = async () => {
    console.log("working");
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setuser(doc.data());
      });
    } catch (error) {
      console.log(error);
      seterror(true);
    }
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
      {error ? <p style={{ color: "red" }}>User Not Found!</p> : ""}
      {user && (
        <div className="userchat">
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
