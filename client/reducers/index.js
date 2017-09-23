import { combineReducers } from 'redux';
import tracks from './tracks';
import auth from './auth';
import currentPlayingTrack from './currentPlayingTrack';
import audioPlayer from './audioPlayer';

export default combineReducers({
	audioPlayer, tracks, currentPlayingTrack, auth
});