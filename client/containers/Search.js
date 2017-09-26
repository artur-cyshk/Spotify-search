import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Search } from '../components';
import { searchTracks, addTrackToPlayer, clearTracksList, removeTrackFromPlayer } from '../actions/creators';


export default connect(
	(store) => ({tracks: store.tracks, currentPlayingInPlayer: store.audioPlayer.track}),
	(dispatch) => bindActionCreators({ searchTracks, clearTracksList, addTrackToPlayer, removeTrackFromPlayer }, dispatch)
)(Search);
