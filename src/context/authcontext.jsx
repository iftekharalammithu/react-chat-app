import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authcontext = createContext();

export const Authcontextprovider = ({ children }) => {
  const [currentuser, setcurrentuser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setcurrentuser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  <authcontext.Provider value={{ currentuser }}>
    {children}
  </authcontext.Provider>;
};
