import axios from "axios";

import {
	CLOSE_POPUP,
	CLOSE_SIGNUP_POPUP,
	DEL_LOGGED_IN_USER,
	LOG_IN,
	LOG_OUT,
	OPEN_POPUP,
	OPEN_SIGNUP_POPUP,
	SET_LOGGED_IN_USER,
	SIGNUP,
	TOGGLE_POPUP,
	TOGGLE_SIGNUP_POPUP,
} from "./actionTypes";

export const togglePopup = () => {
	return { type: TOGGLE_POPUP };
};

export const toggleSignupPopup = () => {
	return { type: TOGGLE_SIGNUP_POPUP };
};

export const openPopup = () => {
	return { type: OPEN_POPUP };
};

export const closePopup = () => {
	return { type: CLOSE_POPUP };
};

export const openSignupPopup = () => {
	return { type: OPEN_SIGNUP_POPUP };
};

export const closeSignupPopup = () => {
	return { type: CLOSE_SIGNUP_POPUP };
};

export const logIn = () => {
	return { type: LOG_IN };
};

export const logOut = () => {
	return { type: LOG_OUT };
};

export const setLoggedIn = (payload) => {
	return { type: SET_LOGGED_IN_USER, payload };
};

export const delLoggedIn = () => {
	return { type: DEL_LOGGED_IN_USER };
};

export const signUp = () => {
	return { type: SIGNUP };
};

export const fetchUser = (payload) => (dispatch) => {
	fetch(`http://localhost:8000/users?email=${String(payload)}`)
		.then((api) => api.json())
		.then((data) => {
			data.length === 0 ? dispatch(signUp()) : dispatch(setLoggedIn(data[0]));
		});
};

export const postUserData = (payload) => (dispatch) => {
	axios
		.post(`http://localhost:8000/users`, payload)
		.then((data) => {
			dispatch(setLoggedIn(data.data));
			dispatch(closeSignupPopup());
		})
		.catch((err) => console.log(err));
};

export const updateUser = (payload) => (dispatch) => {
	console.log(payload);
	axios.patch(`http://localhost:8000/users/${payload.id}`, payload).then(() => {
		dispatch(setLoggedIn(payload));
	});
};

export const checkUser = (payload) => (dispatch) => {
	fetch(`http://localhost:8000/users?email=${payload.email}`)
		.then((api) => api.json())
		.then((data) => {
			if (data.length === 0) {
				fetch(`http://localhost:8000/users`, {
					method: "POST",
					body: JSON.stringify(payload),
					headers: {
						"content-type": "application/json",
					},
				})
					.then((api) => api.json())
					.then((data) => dispatch(setLoggedIn(data)));
			} else {
				dispatch(setLoggedIn(data[0]));
			}
		});
};
