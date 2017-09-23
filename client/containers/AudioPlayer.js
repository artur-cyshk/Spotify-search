import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AudioPlayer } from '../components';
import { addTrackToPlayer, removeTrackFromPlayer } from '../actions/creators';

export default connect(
	(store) => ({track: store.audioPlayer.track}),
	(dispatch) => bindActionCreators({ addTrackToPlayer, removeTrackFromPlayer }, dispatch)
)(AudioPlayer);
