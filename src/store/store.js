import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { noteListReducer } from "./Reducers/noteListReducer";
import { userReducer } from "./Reducers/userReducer";

const reducer = combineReducers({
  User: userReducer,
  NoteList: noteListReducer,
});

function storedUserLoggedInInformation() {
  const logged = localStorage.getItem("isLoggedIn");

  if (logged === "1") {
    return true;
  } else {
    return false;
  }
}

const initialState = {
  User: {
    isLoggedIn: storedUserLoggedInInformation(),
  },
  NoteList: {
    noteList: [
      { id: 0, header: "firstNote", body: "regarding firstNote" },
      { id: 1, header: "secondNote", body: "regarding secondNote" },
    ],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
