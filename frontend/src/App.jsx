import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginModal } from "./components/Navbar/LoginModal";
import { useSelector } from "react-redux";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";

function App() {
	const { isPopupOn } = useSelector((store) => store.popupReducer);

	return (
		<div className={`App ${isPopupOn ? "popUpOn" : ""}`}>
			<Navbar />
			{isPopupOn && <LoginModal />}

			{/* <div
				className="testing"
				style={{
					margin: "100px auto",
					border: "1px solid white",
					width: "50%",
					height: "300px",
				}}
			>
				<RestaurantCard />
			</div> */}
		</div>
	);
}

export default App;
