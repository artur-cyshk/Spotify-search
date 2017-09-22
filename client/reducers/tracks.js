import { SEARCH_TRACKS, SEARCH_TRACKS_READY, SEARCH_TRACKS_FAILURE, CLEAR_TRACKS_LIST } from '../actions/types';

const initialState = {
	list: [],
	loading: false,
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CLEAR_TRACKS_LIST:
			return {
				list: [],
				error: {},
				loading: false
			};
		case SEARCH_TRACKS: 
			return {
				loading: true,
				error: {},
				total: state.total,
				list: Object.assign([], state.list)
			};
		case SEARCH_TRACKS_READY:
			const { total, items } = action.payload.tracks;
			return {
				list: state.list.concat(items),
				total: total,
				loading: false,
				error: {}
			};
		case SEARCH_TRACKS_FAILURE: 
			const { error } = action.payload;
			return {
				list: [],
				error: error,
				loading: false
			};
		default:
			return state;	
	};
};