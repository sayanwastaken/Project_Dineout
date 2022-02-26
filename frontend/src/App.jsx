// Third Party Imports
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
// Inner Imports
import { Navbar } from "./components/Navbar/Navbar";

// Styles Imports
import "./App.css";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { BookATable } from "./components/BookATable/BookATable";
import { SinglePrevReservDetails } from "./components/UserProfile/SinglePrevReserv";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "./store/Login/actions";
import Passport from "./components/dineoutpassport/Dine";

function App() {
  const dispatch = useDispatch();

  const LOGGED_IN_USER =
    JSON.parse(localStorage.getItem("loggedinuser")) || null;

  if (LOGGED_IN_USER) {
    dispatch(setLoggedIn(LOGGED_IN_USER));
  }

  return (
    <div className="App">
      {/* hey robby made changes */}
      <Navbar />
      {/* <FilterSection /> */}
      <Routes>
        <Route path="/users/:id" element={<UserProfile />}></Route>
        <Route
          path="/users/:id/confirmed-bookings/:pID"
          element={<SinglePrevReservDetails />}
        ></Route>
        <Route path="/book-a-table" element={<BookATable />}></Route>
        <Route path="/dine-passport" element={<Passport />}></Route>
      </Routes>
    </div>
  );
}

export default App;
