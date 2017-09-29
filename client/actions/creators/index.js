import { searchTracks, clearTracksList } from './searchTracksCreators';
import { addTrackToPlayer, removeTrackFromPlayer } from './audioPlayerCreators';
import { getCurrentPlayingTrack, playTrack } from './getCurrentPlayingTrackCreators';
import { setAuthorization, getMe } from './authCreators';
import { getDevices, removeDevices } from './devicesCreators';

export {
	addTrackToPlayer, removeTrackFromPlayer,
	searchTracks, clearTracksList, 
	getCurrentPlayingTrack, playTrack,
	setAuthorization, getMe,
	getDevices, removeDevices
}