// Third Party Imports
import { Routes, Route } from "react-router-dom";

// Inner Imports
import { Navbar } from "./components/Navbar/Navbar";

// Styles Imports
import "./App.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { BookATable } from "./components/BookATable/BookATable";
import { SinglePrevReservDetails } from "./components/UserProfile/SinglePrevReserv";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "./store/Login/actions";
import { HomePage } from "./components/HomePage/HomePage";
import Restaurant from "./components/RestPage/Restaurant";

function App() {
	const dispatch = useDispatch();

	const LOGGED_IN_USER =
		JSON.parse(localStorage.getItem("loggedinuser")) || null;

	if (LOGGED_IN_USER) {
		dispatch(setLoggedIn(LOGGED_IN_USER));
	}

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/users/:id" element={<UserProfile />}></Route>
				<Route
					path="/users/:id/confirmed-bookings/:pID"
					element={<SinglePrevReservDetails />}
				></Route>
				<Route path="/book-a-table" element={<BookATable />}></Route>
				<Route path="/restaurants" element={<Restaurant />}></Route>
			</Routes>
		</div>
	);
}

export default App;
