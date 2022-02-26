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
import Restaurant from "./components/RestPage/Restaurant";

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
      <Routes>
        <Route path="/users/:id" element={<UserProfile />}></Route>
        <Route path="/restaurants" element={<Restaurant />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
