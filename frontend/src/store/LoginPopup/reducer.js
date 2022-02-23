import { CLOSE_POPUP, OPEN_POPUP, TOGGLE_POPUP } from "./actionTypes";

const init = {
	isPopupOn: false,
};

export const popupReducer = (state = init, { payload, type }) => {
	switch (type) {
		case TOGGLE_POPUP:
			return { ...state, isPopupOn: !state.isPopupOn };

		case OPEN_POPUP:
			return { ...state, isPopupOn: true };

		case CLOSE_POPUP:
			return { ...state, isPopupOn: false };
		default:
			return { ...state };
	}
};
