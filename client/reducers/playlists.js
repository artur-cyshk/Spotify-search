import { GET_USER_PLAYLISTS, GET_USER_PLAYLISTS_READY, GET_USER_PLAYLISTS_FAILURE, CLEAR_PLAYLISTS, EXPAND_PLAYLIST } from '../actions/types';

const initialState = {
	data: {},
	loading: false,
	error: {},
	currentExpandedPlaylist: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case EXPAND_PLAYLIST:
			return {
				...state,
				currentExpandedPlaylist: action.payload
			};
		case GET_USER_PLAYLISTS: 
			return {
				...state,
				error: {},
				loading: true
			};
		case GET_USER_PLAYLISTS_READY: 
			return {
				...state,
				loading: false,
				data: {
					...action.payload,
					items: (state.data.items || []).concat(action.payload.items)
				} || {},
				error: {}
			};
		case GET_USER_PLAYLISTS_FAILURE: 
			const { error } = action.payload || {};
			return {
				...state,
				loading: false,
				data: {},
				error: error || {}
			};	
		case CLEAR_PLAYLISTS: 	
			return {
				...state,
				loading: false,
				data: {},
				error: {},
				currentExpandedPlaylist: {}
			};
		default:
			return state;	
	};
};