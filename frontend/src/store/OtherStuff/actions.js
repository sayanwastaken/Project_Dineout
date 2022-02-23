import {
	ADD_REST,
	DEL_REST,
	GET_REST_LOADING,
	GET_REST_SUCCESS,
} from "./actionTypes";

export const addRest = (payload) => {
	return { type: ADD_REST, payload };
};

export const getRestLoading = () => {
	return { type: GET_REST_LOADING };
};

export const getRestSuccess = (payload) => {
	return { type: GET_REST_SUCCESS, payload };
};

export const delRest = (payload) => {
	return { type: DEL_REST, payload };
};

export const getRestaurants = () => (dispatch) => {
	dispatch(getRestLoading());
	fetch("http://127.0.0.1:8080/restaurants")
		.then((api) => api.json())
		.then((data) => dispatch(getRestSuccess(data)));
};
