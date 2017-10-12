import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Track } from '../components';
import { addTrackToPlayer, removeTrackFromPlayer, changeTrackState } from '../actions/creators';


export default connect(
	(store) => ({currentPlayingInPlayer: store.audioPlayer.track, currentPlayingGlobally: store.currentPlayingTrack, auth: store.auth}),
	(dispatch) => bindActionCreators({ addTrackToPlayer, removeTrackFromPlayer, changeTrackState }, dispatch)
)(Track);
