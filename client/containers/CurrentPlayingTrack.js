import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CurrentPlayingTrack } from '../components';
import { getCurrentPlayingTrack, playTrack, getDevices, removeDevices } from '../actions/creators';

export default connect(
	(store) => ({currentPlayingTrack: store.currentPlayingTrack, devices: store.devices}),
	(dispatch) => bindActionCreators({ getCurrentPlayingTrack, playTrack, getDevices, removeDevices }, dispatch)
)(CurrentPlayingTrack);
