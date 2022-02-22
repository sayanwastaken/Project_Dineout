import { TOGGLE_POPUP } from "./actionTypes";

const init = {
	isPopupOn: false,
};

export const popupReducer = (state = init, { payload, type }) => {
	switch (type) {
		case TOGGLE_POPUP:
			return { ...state, isPopupOn: !state.isPopupOn };
		default:
			return { ...state };
	}
};
