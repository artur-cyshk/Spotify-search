import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Search } from '../components';
import { searchTracks, clearTracksList } from '../actions/creators';


export default connect(
	(store) => ({tracks: store.tracks}),
	(dispatch) => bindActionCreators({ searchTracks, clearTracksList }, dispatch)
)(Search);
