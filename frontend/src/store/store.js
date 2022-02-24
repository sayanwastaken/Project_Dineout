import { createStore, combineReducers } from "redux";
import { otherReducer } from "./OtherStuff/reducer";
import { popupReducer } from "./LoginPopup/reducer";
import { authReducer } from "./authRedux/reducer";

const combinedReducer = combineReducers({
  popupReducer,
  otherReducer,
  authReducer,
});

export const store = createStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
