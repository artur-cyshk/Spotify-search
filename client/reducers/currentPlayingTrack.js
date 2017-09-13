import { GET_CURRENT_PLAYING_TRACK, GET_CURRENT_PLAYING_TRACK_READY, GET_CURRENT_PLAYING_TRACK_FAILURE } from '../actions/types';

const initialState = {
	track: {},
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CURRENT_PLAYING_TRACK: 
			return {
				loading: true,
				error: {},
				track: Object.assign({}, state.track)
			};
		case GET_CURRENT_PLAYING_TRACK_READY:
			const { item } = action.payload;
			return {
				track: Object.assign({}, item),
				loading: false,
				error: {}
			};
		case GET_CURRENT_PLAYING_TRACK_FAILURE: 
			const { error } = action.payload;
			return {
				track: {},
				error: error,
				loading: false
			};
		default:
			return state;	
	};
};