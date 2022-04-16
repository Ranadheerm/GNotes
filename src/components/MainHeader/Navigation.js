import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutHandler } from "../../store/Actions/userActions";
const Navigation = () => {
  const ctx = useSelector((state) => state.User);
  const { isLoggedIn } = ctx;
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logoutHandler());
  };
  return (
    <header className="container">
      <nav className="navbar   navbar-light bg-light">
        <p className="navbar-brand me-auto">G Notes</p>
        {isLoggedIn && (
          <button className="btn btn-outline-danger" onClick={logOutHandler}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
