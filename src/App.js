import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navigation from "./components/MainHeader/Navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const ctx = useSelector((state) => state.User);
  useEffect(() => {
    toast.configure();
  }, []);

  return (
    <React.Fragment>
      <Navigation> </Navigation>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </React.Fragment>
  );
}

export default App;
