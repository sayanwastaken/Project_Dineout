import { useState } from "react";
import { Button } from "./styled-components/Button";
import { InputText } from "./styled-components/InputText";
import { NavSelect } from "./styled-components/NavSelect";
import { Link } from "react-router-dom";
import "./styles/nav.global.scss";

export const Navbar = () => {
	const [selectClick, setSelectClick] = useState(false);

	const toggleClick = () => {
		setSelectClick(!selectClick);
	};

	return (
		<div className="wrapper">
			<nav className="navbar">
				<NavSelect isSelect={selectClick}>
					<i className="material-icons location">location_on</i>
					<i className="material-icons down_arrow">arrow_drop_down</i>
					<div
						onClick={() => {
							toggleClick();
						}}
						className="location_option"
					>
						<p>Select Location</p>

						<div className="l_options"></div>
					</div>
				</NavSelect>
				<span className="inputSpan">
					<i className="material-icons">search</i>
					<InputText
						type="search"
						placeholder="Search for Restraunts, Offers, Deals or Events..."
					/>
					<Button>Search</Button>
				</span>

				<Button>Login</Button>
			</nav>

			<ul className="bottom_search_options">
				<li>
					<Link to="/">Home</Link>{" "}
				</li>
				<li>
					<Link to="/">Book A Table</Link>
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
		</div>
	);
};
