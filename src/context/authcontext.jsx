import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authcontext = createContext();

export const authcontextprovider = ({ children }) => {
  const [currentuser, setcurrentuser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setcurrentuser(user);
    });
  }, []);

  <authcontext.Provider value={{ currentuser }}>
    {children}
  </authcontext.Provider>;
};
