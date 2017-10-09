import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Track } from '../components';
import { addTrackToPlayer, removeTrackFromPlayer } from '../actions/creators';


export default connect(
	(store) => ({currentPlayingInPlayer: store.audioPlayer.track}),
	(dispatch) => bindActionCreators({ addTrackToPlayer, removeTrackFromPlayer }, dispatch)
)(Track);
