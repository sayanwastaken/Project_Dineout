// Third Party Imports
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Inner Imports
import { Navbar } from "./components/Navbar/Navbar";
import { getRestaurants } from "./store/OtherStuff/actions";
import { authentication } from "./configs/myFirebase";
import { signInWithPopup } from "firebase/auth";
import { googleProvider, facebookProvider } from "./service/authProviders";
import { userLogin, userLogout } from "./store/authRedux/actions";

// Styles Imports
import "./App.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { SinglePrevReservDetails } from "./components/UserProfile/SinglePrevReserv";

function App() {
	const { isPopupOn, isSignupPopupOn } = useSelector(
		(store) => store.loginReducer
	);
	const { restaurants } = useSelector((store) => store.otherReducer);

	const { socialUser } = useSelector((store) => store.authReducer);
	const dispatch = useDispatch();

	const authHandler = (authentication, authProvider) => {
		signInWithPopup(authentication, authProvider)
			.then((res) => {
				// console.log(res);
				dispatch(userLogin(res.user));
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	useEffect(() => {
		dispatch(getRestaurants());
	}, []);

	return (
		<div
			style={{ marginTop: "150px" }}
			className={`App ${isPopupOn || isSignupPopupOn ? "popUpOn" : ""}`}
		>
			<Navbar />
			<div className="authbuttons">
				<button onClick={() => authHandler(authentication, googleProvider)}>
					GOOGLE-Login
				</button>
				<button onClick={() => authHandler(authentication, facebookProvider)}>
					Facebook-Login
				</button>
				<button
					onClick={() => {
						console.log(socialUser);
					}}
				>
					see store
				</button>
				<button
					onClick={() => {
						dispatch(userLogout());
					}}
				>
					logout
				</button>
			</div>
			<Routes>
				<Route path="/users/:id" element={<UserProfile />}></Route>
				<Route
					path="/users/:id/confirmed-bookings/:bookID"
					element={<SinglePrevReservDetails />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
