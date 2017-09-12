import { combineReducers } from 'redux';
import tracks from './tracks';
import currentPlayingTrack from './currentPlayingTrack';

export default combineReducers({
	tracks, currentPlayingTrack
});