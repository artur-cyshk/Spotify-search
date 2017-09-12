import * as actionTypes from '../types';
import { MUSIC_LIST_LIMIT, SPOTIFY_METHODS } from '../../constants';

export const tracksReady = (res, err) => {
  return {
    type: res ? actionTypes.SEARCH_TRACKS_READY : actionTypes.SEARCH_TRACKS_FAILURE,
    payload: res || err
  };
}

export const searchTracks = (searchValue) => {
  return { 
    type: actionTypes.SEARCH_TRACKS,
    onSuccess: (res, dispatch) => dispatch(tracksReady(res, null)),
    onFailure: (res, dispatch) => dispatch(tracksReady(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.searchTracks,
      options: [searchValue, { limit: MUSIC_LIST_LIMIT}]
    }
  };
}