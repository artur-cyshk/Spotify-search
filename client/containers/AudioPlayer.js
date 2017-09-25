import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AudioPlayer } from '../components';
import { removeTrackFromPlayer } from '../actions/creators';

export default connect(
	(store) => ({audioPlayer: store.audioPlayer}),
	(dispatch) => bindActionCreators({ removeTrackFromPlayer }, dispatch)
)(AudioPlayer);
