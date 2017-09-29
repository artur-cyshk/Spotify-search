import { SET_AUTHORIZATION, GET_ME, GET_ME_READY, GET_ME_FAILURE } from '../actions/types';

const initialState = {
	user: {},
	isAuthorized: undefined,
	error: {},
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTHORIZATION: 
			return {
				...state,
				isAuthorized: action.payload
			};
		case GET_ME: 
			return {
				...state,
				loading: true,
				error: {},
				user: {}
			};	
		case GET_ME_READY: 
			return {
				...state,
				user: action.payload,
				loading: false,
				error: {}
			};
		case GET_ME_FAILURE: 
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				user: {},
				error: error
			};	
		default:
			return state;	
	};
};