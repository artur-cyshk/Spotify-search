import { 
  GET_CURRENT_PLAYING_TRACK, GET_CURRENT_PLAYING_TRACK_READY, GET_CURRENT_PLAYING_TRACK_FAILURE,
  PLAY_NEXT_TRACK, PLAY_PREV_TRACK,
  CHANGE_TRACK_STATE, CHANGE_TRACK_STATE_READY, CHANGE_TRACK_STATE_FAILURE
} from '../types';
import { SPOTIFY_METHODS, GETTING_CURRENT_PLAYING_DELAY } from '../../constants';

const trackReady = (res, err) => {
  return {
    type: res ? GET_CURRENT_PLAYING_TRACK_READY : GET_CURRENT_PLAYING_TRACK_FAILURE,
    payload: res || err
  };
}

const changeTrackStateReady = (res, err) => {
  return {
    type: res ? CHANGE_TRACK_STATE_READY : CHANGE_TRACK_STATE_FAILURE,
    payload: res || res
  };
}

export const changeTrackState = (options, isPlayingNow, needRefresh) => {
  return { 
    type: CHANGE_TRACK_STATE,
    onSuccess: (res, dispatch) => {
      if (needRefresh) {
        setTimeout(()=> dispatch(getCurrentPlayingTrack()), GETTING_CURRENT_PLAYING_DELAY.afterChangeState);
      }else {
        dispatch(changeTrackStateReady({ isPlayingNow: isPlayingNow }, null));
      }
    },
    onFailure: (res, dispatch) => dispatch(changeTrackStateReady(null, res)),
    spotifyData: {
      method: isPlayingNow ? SPOTIFY_METHODS.pause : SPOTIFY_METHODS.play,
      options: [options]
    }
  }
}

export const playTrack = (options, next) => {
  return { 
    type: next ? PLAY_NEXT_TRACK : PLAY_PREV_TRACK,
    onSuccess: (res, dispatch) => setTimeout(()=> dispatch(getCurrentPlayingTrack()), GETTING_CURRENT_PLAYING_DELAY.afterPlay),
    onFailure: (res, dispatch) => dispatch(trackReady(null, res)),
    spotifyData: {
      method: next ? SPOTIFY_METHODS.skipToNext : SPOTIFY_METHODS.skipToPrevious,
      options: [options]
    }
  }
}

export const getCurrentPlayingTrack = () => {
  return { 
    type: GET_CURRENT_PLAYING_TRACK,
    onSuccess: (res, dispatch) => dispatch(trackReady(res, null)),
    onFailure: (res, dispatch) => dispatch(trackReady(null, res)),
    spotifyData: {
      method: SPOTIFY_METHODS.getMyCurrentPlayingTrack
    }
  }
}