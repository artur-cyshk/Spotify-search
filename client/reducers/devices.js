import { GET_DEVICES, REMOVE_DEVICES, GET_DEVICES_READY, GET_DEVICES_FAILURE } from '../actions/types';

const initialState = {
	list: [],
	loading: false,
	error: {},
	activeDevice: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DEVICES: 
			return {
				list: [],
				loading: false,
				error: {},
				activeDevice: {}
			};
		case GET_DEVICES_READY: 
			const { devices = [] } = action.payload || {};
			return {
				loading: false,
				list: devices,
				activeDevice: devices.find(device => device.is_active) || {},
				error: {}
			};
		case GET_DEVICES_FAILURE: 
			const { error = {} } = action.payload || {};
			return {
				loading: false,
				list: [],
				activeDevice: {},
				error: error
			};	
		case REMOVE_DEVICES: 	
			return {
				loading: false,
				list: [],
				activeDevice: {},
				error: {}
			};
		default:
			return state;	
	};
};