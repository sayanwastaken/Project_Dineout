// Third Party Imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Inner Imports
import { otherReducer } from "./OtherStuff/reducer";
import { loginReducer } from "./Login/reducer";

const combinedReducer = combineReducers({ loginReducer, otherReducer });

export const store = createStore(
	combinedReducer,
	composeWithDevTools(applyMiddleware(thunk))

	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
