import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginModal } from "./components/Navbar/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";
import { useEffect } from "react";
import { getRestaurants } from "./store/OtherStuff/actions";
import { SignupModal } from "./components/Navbar/SignupModal";

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
			{isPopupOn && <LoginModal />}
			{isSignupPopupOn && <SignupModal />}

			{/* <div
				className="testing"
				style={{
					margin: "100px auto",
					border: "1px solid white",
					width: "50%",
					height: "300px",
				}}
			>
				{restaurants.map((oneRest) => {
					const { _id, name, price, type, features } = oneRest;
					return (
						<RestaurantCard
							key={_id}
							name={name}
							price={price}
							type={type}
							features={features}
						/>
					);
				})}
			</div> */}
		</div>
	);
}

export default App;
