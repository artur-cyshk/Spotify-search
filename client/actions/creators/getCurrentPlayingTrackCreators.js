import * as actionTypes from '../types';
import { SPOTIFY_METHODS } from '../../constants';

export const trackReady = (res, err) => {
  return {
    type: res ? actionTypes.GET_CURRENT_PLAYING_TRACK_READY : actionTypes.GET_CURRENT_PLAYING_TRACK_FAILURE,
    payload: res || err
  };
}

export const getCurrentPlayingTrack = () => {
  return { 
    type: actionTypes.GET_CURRENT_PLAYING_TRACK,
    onSuccess: (res, dispatch) => dispatch(trackReady(res, null)),
    onFailure: (res, dispatch) => dispatch(trackReady(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.getMyCurrentPlayingTrack
    }
  }
}