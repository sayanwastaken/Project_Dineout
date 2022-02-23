import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginModal } from "./components/Navbar/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { RestaurantCard } from "./components/RestaurantCard/RestaurantCard";
import { authentication } from "./configs/myFirebase";
import { signInWithPopup } from "firebase/auth";
import { googleProvider, facebookProvider } from "./service/authProviders";
import { userLogin, userLogout } from "./store/authRedux/actions";

function App() {
  const { isPopupOn } = useSelector((store) => store.popupReducer);
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
  );
}

export default App;
