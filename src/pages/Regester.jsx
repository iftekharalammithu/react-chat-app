import React from "react";

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
          <input type="file" />
          <button>Regester</button>
        </form>
        <p>You have an account? Login</p>
      </div>
    </div>
  );
};

export default Regester;
