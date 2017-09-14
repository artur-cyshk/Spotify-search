import { combineReducers } from 'redux';
import tracks from './tracks';
import auth from './auth';
import currentPlayingTrack from './currentPlayingTrack';

export default combineReducers({
	tracks, currentPlayingTrack, auth
});