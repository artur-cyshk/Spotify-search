import {
	GET_CURRENT_PLAYING_TRACK, GET_CURRENT_PLAYING_TRACK_READY, GET_CURRENT_PLAYING_TRACK_FAILURE, 
	PLAY_NEXT_TRACK, PLAY_PREV_TRACK,
  	CHANGE_TRACK_STATE, CHANGE_TRACK_STATE_READY, CHANGE_TRACK_STATE_FAILURE
} from '../actions/types';

const initialState = {
	track: {},
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TRACK_STATE:
			return {
				...state,
				loadingTrackState: true
			};
		case CHANGE_TRACK_STATE_READY:
			return {
				...state,
				track: Object.assign({}, {...state.track, is_playing: !action.payload.isPlayingNow}),
				loadingTrackState: false
			};
		case CHANGE_TRACK_STATE_FAILURE:
			return {
				...state,
				loadingTrackState: false
			};
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
				...state
			};
		case GET_CURRENT_PLAYING_TRACK_READY:
			const { item } = action.payload || {};
			item.is_playing = (action.payload || {}).is_playing || false;
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