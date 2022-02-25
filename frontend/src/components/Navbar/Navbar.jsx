// Third Party Imports
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Inner Imports
import { Button } from "./styled-components/Button";
import { InputText } from "./styled-components/InputText";
import { NavSelect } from "./styled-components/NavSelect";
import { locations } from "./locations";
import { LoggedInMenu } from "./LoggedInMenu";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

// Styles
import "./styles/nav.global.scss";
import { applySearch } from "../../store/Restaurants/actions";

export const Navbar = () => {
	const [selectClick, setSelectClick] = useState(false);
	const [location, setLocation] = useState("");
	const locationRef = useRef();
	const dispatch = useDispatch();

	// Modals state
	// const [signUpModal, setSignUpModal] = useState(false);

	const [loginModal, setLoginModal] = useState(false);

	// Modal Handlers
	const handleLoginModal = (value) => {
		setLoginModal(value);
	};

	const { isPopupOn, isLoggedIn, isSignupPopupOn } = useSelector(
		(store) => store.loginReducer
	);

	const toggleClick = () => {
		setSelectClick(!selectClick);
	};

	// Input REf
	const inputRef = useRef();

	return (
		<div className="wrapper">
			<nav className="navbar">
				<NavSelect isSelect={selectClick} isPopup={isPopupOn}>
					<i className="material-icons location">location_on</i>
					<i className="material-icons down_arrow">arrow_drop_down</i>
					<div
						onClick={() => {
							toggleClick();
						}}
						className="location_option"
					>
						<p ref={locationRef}>{location ? location : "Select Location"}</p>

						<div className="l_options">
							<Button fs="12px">Use my current location</Button>
							{locations.map((oneLocation) => {
								return (
									<p
										onClick={() => {
											setLocation(oneLocation);
										}}
										className="oneLocation"
										key={oneLocation}
									>
										{oneLocation}
									</p>
								);
							})}
						</div>
					</div>
				</NavSelect>
				<span className="inputSpan">
					<i className="material-icons">search</i>
					<InputText
						ref={inputRef}
						type="search"
						isPopup={isPopupOn}
						placeholder="Search for Restraunts, Offers, Deals or Events..."
					/>
					<Button onClick={() => dispatch(applySearch(inputRef.current.value))}>
						Search
					</Button>
				</span>

				{!isLoggedIn ? (
					<Button onClick={() => handleLoginModal(true)}>Login</Button>
				) : (
					<LoggedInMenu />
				)}
			</nav>

			<ul className="bottom_search_options">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/book-a-table">Book A Table</Link>
				</li>
				<li>
					<Link to="/">Dineout Pay</Link>
				</li>
				<li>
					<Link to="/">Dineout Passport</Link>
				</li>
				<li>
					<Link to="/">Super Saver</Link>
				</li>
			</ul>

			{/* Modals */}
			{loginModal && <LoginModal handler={handleLoginModal} />}
			{isSignupPopupOn && <SignupModal />}
		</div>
	);
};
