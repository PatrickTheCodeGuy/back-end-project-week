import {
	ADD_NOTE,
	GET_NOTES,
	DELETE_NOTE
} from "../components/actions/actions";
import axios from "axios";

const initialState = {
	notes: []
};

export const noteReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTES:
			return { ...state, notes: action.payload };
		case ADD_NOTE:
			axios.post("http://localhost:3300/notes", action.payload).then(note => {
				return { ...state, notes: [...state.notes, note] };
			});
		case DELETE_NOTE:
			axios.delete(`http://localhost:3300/notes/${action.payload}`).then(id => {
				return { ...state };
			});
		default:
			return state;
	}
};
