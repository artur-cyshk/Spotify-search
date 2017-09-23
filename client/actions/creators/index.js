import { searchTracks, clearTracksList } from './searchTracksCreators';
import { addTrackToPlayer, removeTrackFromPlayer } from './audioPlayerCreators';
import { getCurrentPlayingTrack } from './getCurrentPlayingTrackCreators';
import { setAuthorization } from './authCreators';

export {
	addTrackToPlayer, removeTrackFromPlayer,
	searchTracks, clearTracksList, 
	getCurrentPlayingTrack, 
	setAuthorization
}