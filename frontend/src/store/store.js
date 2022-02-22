import { createStore, combineReducers } from "redux";
import { otherReducer } from "./OtherStuff/reducer";
import { popupReducer } from "./LoginPopup/reducer";

const combinedReducer = combineReducers({ popupReducer, otherReducer });

export const store = createStore(
	combinedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
