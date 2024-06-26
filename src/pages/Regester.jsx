import React from "react";
import addAvatar from "../img/addAvatar.png";

const Regester = () => {
  return (
    <div className="formcontainer">
      <div className="fromwriper">
        <span className="logo">Vite Chat</span>
        <span className="tilte">Regester</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input hidden type="file" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="upload profile" />
            <span>Add an Avatar</span>
          </label>
          <button>Regester</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Regester;
