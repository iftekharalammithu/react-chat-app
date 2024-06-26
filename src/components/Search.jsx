import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find A User" />
      </div>
      <div className="userchat">
        <img src="src/img/download (3).jpg" alt="user-profile" />
        <div className="userinfo">
          <span>User Name</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
