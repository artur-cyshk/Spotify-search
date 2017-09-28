import { GET_DEVICES, REMOVE_DEVICES, GET_DEVICES_READY, GET_DEVICES_FAILURE } from '../types';
import { SPOTIFY_METHODS } from '../../constants';

const devicesReady = (res, err) => {
  return {
    type: res ? GET_DEVICES_READY : GET_DEVICES_FAILURE,
    payload: res || err
  };
}

export const getDevices = () => {
  return { 
    type: GET_DEVICES,
    onSuccess: (res, dispatch) => dispatch(devicesReady(res, null)),
    onFailure: (res, dispatch) => dispatch(devicesReady(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.getMyDevices
    }
  };
}

export const removeDevices = () => {
  return {
    type: REMOVE_DEVICES
  }
}