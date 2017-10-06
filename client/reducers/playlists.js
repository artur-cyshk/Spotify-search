import { GET_USER_PLAYLISTS, GET_USER_PLAYLISTS_READY, GET_USER_PLAYLISTS_FAILURE, CLEAR_PLAYLISTS } from '../actions/types';

const initialState = {
	data: {},
	loading: false,
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_PLAYLISTS: 
			return {
				...state,
				error: {},
				loading: true
			};
		case GET_USER_PLAYLISTS_READY: 
			return {
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
				loading: false,
				data: {},
				error: error || {}
			};	
		case CLEAR_PLAYLISTS: 	
			return {
				loading: false,
				data: {},
				error: {}
			};
		default:
			return state;	
	};
};