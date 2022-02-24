// Third Party Imports
import { useSelector } from "react-redux";
export const UserInfoEdits = ({ handleModal }) => {
	const { loggedInUser } = useSelector((store) => store.loginReducer);

	return (
		<div className="user__info-edits">
			<div className="img__section">
				<img src="https://picsum.photos/100" alt="user image" />
			</div>
			<div className="text__edits">
				<p className="userName">
					{loggedInUser.name}{" "}
					<i onClick={() => handleModal(true)} className="material-icons edits">
						edit
					</i>{" "}
				</p>
				<p>
					{" "}
					<i className="material-icons">call</i> +91 {loggedInUser.mobile}{" "}
					<span className="edits" onClick={() => handleModal(true)}>
						Edit
					</span>
				</p>
				<p>
					<i className="material-icons">mail</i>
					{loggedInUser.email}{" "}
					<span className="edits" onClick={() => handleModal(true)}>
						Edit
					</span>
				</p>
			</div>
			<p className="totalDined">
				Total Dined <span>3</span>
			</p>
		</div>
	);
};
