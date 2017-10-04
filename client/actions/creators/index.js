import { searchTracks, clearTracksList } from './searchTracksCreators';
import { addTrackToPlayer, removeTrackFromPlayer } from './audioPlayerCreators';
import { getCurrentPlayingTrack, playTrack, changeTrackState } from './getCurrentPlayingTrackCreators';
import { setAuthorization, getMe } from './authCreators';
import { getDevices, removeDevices } from './devicesCreators';

export {
	addTrackToPlayer, removeTrackFromPlayer,
	searchTracks, clearTracksList, 
	getCurrentPlayingTrack, playTrack, changeTrackState,
	setAuthorization, getMe,
	getDevices, removeDevices
}