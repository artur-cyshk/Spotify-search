import { SET_AUTHORIZATION, GET_ME, GET_ME_READY, GET_ME_FAILURE } from '../types';
import { SPOTIFY_METHODS } from '../../constants';

const meReady = (res, err) => {
  return {
    type: res ? GET_ME_READY : GET_ME_FAILURE,
    payload: res || err
  };
}

export const getMe = () => {
  return { 
    type: GET_ME,
    onSuccess: (res, dispatch) => dispatch(meReady(res, null)),
    onFailure: (res, dispatch) => dispatch(meReady(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.getMe
    }
  };
}

export const setAuthorization = (isAuthorized) => ({ type: SET_AUTHORIZATION, payload: isAuthorized });