import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginModal } from "./components/Navbar/LoginModal";
import { useSelector } from "react-redux";

function App() {
	const { isPopupOn } = useSelector((store) => store.popupReducer);

	return (
		<div className={`App ${isPopupOn ? "popUpOn" : ""}`}>
			<Navbar />
			{isPopupOn && <LoginModal />}
		</div>
	);
}

export default App;
