// Third Party Imports
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Inner Imports
import { Navbar } from "./components/Navbar/Navbar";

// Styles Imports
import "./App.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { OfferOrDeal } from "./components/SingleRestaurant/OfferOrDeal";

function App() {
	const { isPopupOn, isSignupPopupOn } = useSelector(
		(store) => store.loginReducer
	);
	return (
		<div className="App">
			<OfferOrDeal />
			{/* <Navbar /> */}

			<Routes>
				{/* <Route path="/users/:id" element={<UserProfile />}></Route> */}
			</Routes>
		</div>
	);
}

export default App;
