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
    console.log(restaurants);
  }, []);

  return (
    <div className={`App ${isPopupOn || isSignupPopupOn ? "popUpOn" : ""}`}>
      <Navbar />
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

      <Routes>
        <Route path="/users/:id" element={<UserProfile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
