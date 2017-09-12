import { SEARCH_TRACKS, SEARCH_TRACKS_READY, SEARCH_TRACKS_FAILURE } from '../actions/types';

const initialState = {
	list: [],
	total: 0,
	loading: true,
	error: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_TRACKS: 
			return {
				loading: true,
				error: '',
				list: Object.assign([], state.list)
			};
		case SEARCH_TRACKS_READY:
			const { total, items } = action.payload.tracks;
			return {
				list: Object.assign([], items),
				total: total,
				loading: false,
				error: ''
			};
		case SEARCH_TRACKS_FAILURE: 
			const { error } = action.payload;
			return {
				list: [],
				total: 0,
				error: error,
				loading: false
			};
		default:
			return state;	
	};
};