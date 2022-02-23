import { ADD_REST, DEL_REST } from "./actionTypes";

export const addRest = (payload) => {
	return { type: ADD_REST, payload };
};

export const delRest = (payload) => {
	return { type: DEL_REST, payload };
};
