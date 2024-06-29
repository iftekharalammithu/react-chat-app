import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import addAvatar from "../img/addAvatar.png";

import { set } from "firebase/database";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db, databaseref } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Regester = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const handelsubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // console.log(displayName, email, password, file);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // console.log(error);
          setError(true);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await set(databaseref(db, displayName), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            // await set(databaseref(db, res.user.uid), {});
            navigate("/");

            // console.log("res.user=>>>", res.user);
          });
        }
      );
    } catch (error) {
      // console.log(error);
      setError(true);
    }
  };
  return (
    <div className="formcontainer">
      <div className="fromwriper">
        <span className="logo">Vite Chat</span>
        <span className="tilte">Regester</span>
        <form onSubmit={handelsubmit}>
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
        {error ? <p style={{ color: "red" }}>Something went wrong</p> : ""}
        <p>
          You have an account? <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Regester;
