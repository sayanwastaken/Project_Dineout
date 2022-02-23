import {
	ADD_REST,
	DEL_REST,
	GET_REST_LOADING,
	GET_REST_SUCCESS,
} from "./actionTypes";

const init = {
	loading: false,
	error: false,
	restaurants: [],
};

export const otherReducer = (state = init, { type, payload }) => {
	switch (type) {
		case ADD_REST:
			return { ...state, restaurants: [...state.restaurants, payload] };

		case DEL_REST:
			const updatedArr = state.restaurants.map((c) => c.id !== payload);
			return { ...state, updatedArr };

		case GET_REST_LOADING:
			return { ...state, loading: true };

		case GET_REST_SUCCESS:
			return { ...state, loading: false, restaurants: payload };

		default:
			return { ...state };
	}
};
