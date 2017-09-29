import {
	GET_CURRENT_PLAYING_TRACK, GET_CURRENT_PLAYING_TRACK_READY, GET_CURRENT_PLAYING_TRACK_FAILURE, 
	PLAY_NEXT_TRACK, PLAY_PREV_TRACK 
} from '../actions/types';

const initialState = {
	track: {},
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PLAY_NEXT_TRACK: 
			return {
				...state,
				loadingNextTrack: true
			};
		case PLAY_PREV_TRACK: 
			return {
				...state,
				loadingPrevTrack: true
			};
		case GET_CURRENT_PLAYING_TRACK: 
			return {
				loadingCurrentPlayingTrack: true,
				loadingNextTrack: false,
				loadingPrevTrack: false,
				error: {},
				track: {}
			};
		case GET_CURRENT_PLAYING_TRACK_READY:
			const { item } = action.payload || {};
			return {
				track: Object.assign({}, item),
				loadingCurrentPlayingTrack: false,
				error: {}
			};
		case GET_CURRENT_PLAYING_TRACK_FAILURE: 
			const { error } = action.payload || {};
			return {
				track: {},
				error: error || {},
				loadingCurrentPlayingTrack: false
			};
		default:
			return state;	
	};
};