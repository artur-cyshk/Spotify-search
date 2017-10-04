import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CurrentPlayingTrack } from '../components';
import { getCurrentPlayingTrack, changeTrackState, playTrack, getDevices, removeDevices, addTrackToPlayer, removeTrackFromPlayer  } from '../actions/creators';

export default connect(
	(store) => ({currentPlayingTrack: store.currentPlayingTrack, devices: store.devices, auth: store.auth, currentPlayingInPlayer: store.audioPlayer.track}),
	(dispatch) => bindActionCreators({ changeTrackState, getCurrentPlayingTrack, playTrack, getDevices, removeDevices, addTrackToPlayer, removeTrackFromPlayer }, dispatch)
)(CurrentPlayingTrack);
