// Third party imports
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Inner Imports
import { fetchUser, logIn } from "../../store/Login/actions";
import { Button } from "./styled-components/Button";
import { Lmodal } from "./styled-components/Lmodal";
import { SocialButton } from "./styled-components/SocialButton";

// Styles Imports

export const LoginModal = ({ handler }) => {
	const { signUp, isSignupPopupOn } = useSelector(
		(store) => store.loginReducer
	);
	useEffect(() => {
		console.log(signUp);
	}, [signUp]);

	const dispatch = useDispatch();
	const inputRef = useRef();
	return (
		<Lmodal>
			<span className="topHeading">
				<h2>Login / Signup</h2>
				<i
					onClick={() => {
						handler(false);
						// dispatch(closePopup());
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
				<input
					ref={inputRef}
					type="text"
					placeholder="Enter your mobile number"
				/>
				<Button
					wd="100%"
					onClick={() => {
						dispatch(fetchUser(inputRef.current.value));
						handler(false);
						// dispatch(closePopup());
					}}
				>
					Continue
				</Button>
			</form>
			<div className="orLoginVia">
				<div className="blackLineDiv"></div>
				<p>Or login via</p>
				<div className="blackLineDiv"></div>
			</div>
			<div className="social__login">
				<SocialButton bgColor="#486FA4" color="white">
					<img
						src="https://im1.dineout.co.in/images/uploads/misc/2020/Jan/10/facebook-16.png"
						alt=""
					/>
					<p>Facebook</p>
				</SocialButton>

				<SocialButton bgColor="#FFFFFF" border="1px solid grey">
					<img src="static/Google_ G _Logo.svg" />
					<p>Gmail</p>
				</SocialButton>
			</div>
		</Lmodal>
	);
};
