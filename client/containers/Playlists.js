import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Playlists } from '../components';

export default connect(
	(store) => ({}),
	(dispatch) => bindActionCreators({  }, dispatch)
)(Playlists);