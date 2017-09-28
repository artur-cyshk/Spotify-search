import { GET_DEVICES, REMOVE_DEVICES, GET_DEVICES_READY, GET_DEVICES_FAILURE } from '../actions/types';

const initialState = {
	list: [],
	loading: false,
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DEVICES: 
			return {
				loading: true,
				list: [],
				error: {}
			};
		case GET_DEVICES_READY: 
			return {
				loading: false,
				list: action.payload,
				error: {}
			};
		case GET_DEVICES_FAILURE: 
			const { error } = action.payload;
			return {
				loading: false,
				list: [],
				error: error
			};	
		case REMOVE_DEVICES: 	
			return {
				loading: false,
				list: [],
				error: {}
			};
		default:
			return state;	
	};
};