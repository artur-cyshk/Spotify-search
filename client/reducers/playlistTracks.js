import { GET_PLAYLIST_TRACKS, GET_PLAYLIST_TRACKS_READY, GET_PLAYLIST_TRACKS_FAILURE, CLEAR_PLAYLIST_TRACKS } from '../actions/types';

const initialState = {
	data: {
		items: []
	},
	loading: false,
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PLAYLIST_TRACKS: 
			return {
				...state,
				error: {},
				loading: true
			};
		case GET_PLAYLIST_TRACKS_READY: 
			return {
				loading: false,
				data: {
					...action.payload, items: action.payload ? state.data.items.concat(action.payload.items) : []
				},
				error: {}
			};
		case GET_PLAYLIST_TRACKS_FAILURE: 
			const { error } = action.payload || {};
			return {
				loading: false,
				data: {},
				error: error || {}
			};
		case CLEAR_PLAYLIST_TRACKS:
			return { ...initialState }
		default:
			return state;	
	};
};