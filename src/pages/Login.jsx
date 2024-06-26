import React from "react";

const Login = () => {
  return (
    <div className="formcontainer">
      <div className="fromwriper">
        <span className="logo">Vite Chat</span>
        <span className="tilte">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
        </form>
        <p>You don't have an account? Register </p>
      </div>
    </div>
  );
};

export default Login;
