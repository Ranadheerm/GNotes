import {
  USER_ERROR,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/UserConstant";

// LOGOUT
export const logoutHandler = () => (dispatch) => {
  localStorage.removeItem("isLoggedIn");
  dispatch({ type: USER_LOGOUT });
};

export const userList = [
  {
    email: "ranadheer@gmail.com",
    password: "ranadheer@123",
  },
];

export const loginHandler = (email, password) => (dispatch) => {
  const user = userList.find((value) => {
    return value.email === email;
  });
  if (!user) {
    dispatch({ type: USER_LOGIN_FAIL, payload: "User not found" });
    return;
  }
  if (user.password !== password) {
    dispatch({ type: USER_LOGIN_FAIL, payload: "password is incorrect" });
    return;
  }

  localStorage.setItem("isLoggedIn", "1");
  dispatch({ type: USER_LOGIN_SUCCESS, payload: true });
};
export const errorHandler = () => (dispatch) => {
  dispatch({ type: USER_ERROR, payload: false });
};
