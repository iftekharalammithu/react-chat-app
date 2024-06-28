import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const handelsubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    // console.log(displayname, email, password, file);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="formcontainer">
      <div className="fromwriper">
        <span className="logo">Vite Chat</span>
        <span className="tilte">Login</span>
        <form onSubmit={handelsubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Login</button>
        </form>
        {error ? <p style={{ color: "red" }}>Something went wrong</p> : ""}
        <p>
          You don't have an account? <Link to="/regester">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
