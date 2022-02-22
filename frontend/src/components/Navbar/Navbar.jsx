import { Button } from "./styled-components/Button";
import { InputText } from "./styled-components/InputText";
import "./styles/nav.global.css";

export const Navbar = () => {
	return (
		<nav className="navbar">
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
	);
};
