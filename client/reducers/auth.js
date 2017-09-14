import { SET_AUTHORIZATION } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTHORIZATION: 
			return {
				isAuthorized: action.payload
			};
		default:
			return state;	
	};
};