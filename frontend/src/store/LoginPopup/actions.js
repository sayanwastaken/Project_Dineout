import { CLOSE_POPUP, OPEN_POPUP, TOGGLE_POPUP } from "./actionTypes";

export const togglePopup = () => {
	return { type: TOGGLE_POPUP };
};

export const openPopup = () => {
	return { type: OPEN_POPUP };
};

export const closePopup = () => {
	return { type: CLOSE_POPUP };
};
