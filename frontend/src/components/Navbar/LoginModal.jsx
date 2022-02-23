// Third party imports
import { useDispatch } from "react-redux";

// Inner Imports
import { closePopup } from "../../store/LoginPopup/actions";
import { Button } from "./styled-components/Button";
import { Lmodal } from "./styled-components/Lmodal";

export const LoginModal = () => {
	const dispatch = useDispatch();
	return (
		<Lmodal>
			<span className="topHeading">
				<h2>Login / Signup</h2>
				<i
					onClick={() => {
						dispatch(closePopup());
					}}
					className="material-icons"
				>
					close
				</i>
			</span>

			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="loginForm"
			>
				<input type="text" placeholder="Enter your Mobile no / Email id" />
				<Button wd="100%">Continue</Button>
			</form>
			{/* <div className="orLoginVia">
				<div className="blackLineDiv"></div>
				<p>Or login via</p>
				<div className="blackLineDiv"></div>
			</div> */}
		</Lmodal>
	);
};
