import {
  USER_ERROR,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/UserConstant";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { isLoggedIn: action.payload };
    case USER_LOGIN_FAIL:
      return { error: action.payload };
    case USER_LOGOUT:
      return {};
    case USER_ERROR:
      return { isLoggedIn: action.payload };
    default:
      return state;
  }
};
