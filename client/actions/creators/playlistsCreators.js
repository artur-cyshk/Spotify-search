import { GET_USER_PLAYLISTS, GET_USER_PLAYLISTS_READY, GET_USER_PLAYLISTS_FAILURE, CLEAR_PLAYLISTS } from '../types';
import { PLAYLISTS_LIMIT, SPOTIFY_METHODS } from '../../constants';

const onDone = (res, err) => {
  return {
    type: res ? GET_USER_PLAYLISTS_READY : GET_USER_PLAYLISTS_FAILURE,
    payload: res || err
  };
}

export const getUserPlaylists = (page) => {
  return { 
    type: GET_USER_PLAYLISTS,
    onSuccess: (res, dispatch) => dispatch(onDone(res, null)),
    onFailure: (res, dispatch) => dispatch(onDone(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.getUserPlaylists,
      options: [{ limit: PLAYLISTS_LIMIT, offset: page * PLAYLISTS_LIMIT }]
    }
  };
}

export const clearPlaylists = () => {
  return {
    type: CLEAR_PLAYLISTS
  }
} 