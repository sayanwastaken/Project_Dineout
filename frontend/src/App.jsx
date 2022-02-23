import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginModal } from "./components/Navbar/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";
import { authentication } from "./configs/myFirebase";
import authHandler from "./service/authHandler";
import { googleProvider, facebookProvider } from "./service/authProviders";

function App() {
  const { isPopupOn } = useSelector((store) => store.popupReducer);
  const dispatch = useDispatch();
  return (
    <div className={`App ${isPopupOn ? "popUpOn" : ""}`}>
      <Navbar />
      {isPopupOn && <LoginModal />}

      <button onClick={() => authHandler(authentication, googleProvider)}>
        GOOGLE-Login
      </button>
      <button onClick={() => authHandler(authentication, facebookProvider)}>
        Facebook-Login
      </button>
    </div>
  );
}

export default App;
