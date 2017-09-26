import { ADD_TRACK_TO_PLAYER, REMOVE_TRACK_FROM_PLAYER } from '../actions/types';

const initialState = {
	track: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TRACK_TO_PLAYER: 
			return {
				track: action.payload
			}
		case REMOVE_TRACK_FROM_PLAYER: 	
			return {
				track: {}
			};
		default:
			return state;	
	};
};