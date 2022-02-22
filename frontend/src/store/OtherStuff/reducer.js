import { ADD_REST, DEL_REST } from "./actionTypes";

const init = {
	restraunts: [],
};

export const otherReducer = (state = init, { type, payload }) => {
	switch (type) {
		case ADD_REST:
			return { ...state, restraunts: [...state.restraunts, payload] };

		case DEL_REST:
			const updatedArr = state.restraunts.map((c) => c.id !== payload);
			return { ...state, updatedArr };

		default:
			return { ...state };
	}
};
