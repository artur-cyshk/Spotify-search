import { SEARCH_TRACKS, SEARCH_TRACKS_READY, SEARCH_TRACKS_FAILURE, CLEAR_TRACKS_LIST } from '../types';
import { MUSIC_LIST_LIMIT, SPOTIFY_METHODS } from '../../constants';

const tracksReady = (res, err) => {
  return {
    type: res ? SEARCH_TRACKS_READY : SEARCH_TRACKS_FAILURE,
    payload: res || err
  };
}

export const searchTracks = (searchValue) => {
  return { 
    type: SEARCH_TRACKS,
    onSuccess: (res, dispatch) => dispatch(tracksReady(res, null)),
    onFailure: (res, dispatch) => dispatch(tracksReady(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.searchTracks,
      options: [searchValue, { limit: MUSIC_LIST_LIMIT}]
    }
  };
}

export const clearTracksList = () => {
  return {
    type: CLEAR_TRACKS_LIST
  }
}