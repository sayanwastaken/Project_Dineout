import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/Login/actions";
import { NavSelect } from "./styled-components/NavSelect";

export const LoggedInMenu = () => {
	const [select, setSelect] = useState(false);
	const {
		loggedInUser: { name, mobile, email },
	} = useSelector((store) => store.loginReducer);

	const dispatch = useDispatch();
	const toggleSelect = () => {
		setSelect(!select);
	};
	return (
		<NavSelect isSelect={select} border="none" width="150px">
			<p className="first_last_name">
				{name
					.split(" ")
					.map((c) => c.charAt(0).toUpperCase())
					.join("")}
				K
			</p>
			<p onClick={() => toggleSelect()}>My Account</p>
			<i className="material-icons down_arrow">arrow_drop_down</i>

			<div className="drop_down">
				<p>Profile</p>
				<p>Cupon History</p>
				<p
					onClick={() => {
						dispatch(logOut());
					}}
				>
					Logout
				</p>
			</div>
		</NavSelect>
	);
};
