import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CurrentPlayingTrack } from '../components';
import { getCurrentPlayingTrack } from '../actions/creators';

export default connect(
	(store) => ({currentPlayingTrack: store.currentPlayingTrack}),
	(dispatch) => bindActionCreators({ getCurrentPlayingTrack }, dispatch)
)(CurrentPlayingTrack);
