import { useDispatch } from "react-redux";
import { togglePopup } from "../../store/LoginPopup/actions";
import { Lmodal } from "./styled-components/Lmodal";

export const LoginModal = () => {
	const dispatch = useDispatch();
	return (
		<Lmodal>
			<span className="topHeading">
				<h2>Login/Signup</h2>
				<i
					onClick={() => {
						dispatch(togglePopup());
					}}
					className="material-icons"
				>
					close
				</i>
			</span>
		</Lmodal>
	);
};
