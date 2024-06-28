import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Regester from "./pages/Regester";
import { useContext } from "react";
import { Authcontext } from "./context/authcontext";

function App() {
  const { currentuser } = useContext(Authcontext);

  const ProtectedRoutes = ({ children }) => {
    if (!currentuser) {
      return <Navigate to="/login" />;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            ></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="regester" element={<Regester></Regester>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
