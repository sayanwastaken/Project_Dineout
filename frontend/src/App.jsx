// Third Party Imports
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Inner Imports
import { Navbar } from "./components/Navbar/Navbar";
import { getRestaurants } from "./store/OtherStuff/actions";

// Styles Imports
import "./App.css";
import { UserProfile } from "./components/UserProfile/UserProfile";

function App() {
	const { isPopupOn, isSignupPopupOn } = useSelector(
		(store) => store.loginReducer
	);
	const { restaurants } = useSelector((store) => store.otherReducer);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRestaurants());
		console.log(restaurants);
	}, []);

	return (
		<div className={`App ${isPopupOn || isSignupPopupOn ? "popUpOn" : ""}`}>
			<Navbar />
			<Routes>
				<Route path="/users/:id" element={<UserProfile />}></Route>
			</Routes>
		</div>
	);
}

export default App;
