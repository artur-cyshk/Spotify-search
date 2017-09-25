import { ADD_TRACK_TO_PLAYER, REMOVE_TRACK_FROM_PLAYER } from '../actions/types';

const initialState = {
	tracks: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TRACK_TO_PLAYER: 
			return {
				tracks: state.tracks.concat(action.payload)
			}
		case REMOVE_TRACK_FROM_PLAYER: 	
			return {
				tracks: state.tracks.filter(track => track.id !== action.payload)
			};
		default:
			return state;	
	};
};