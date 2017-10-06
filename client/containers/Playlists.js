import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Playlists } from '../components';
import { getUserPlaylists, clearPlaylists } from '../actions/creators';

export default connect(
	(store) => ({playlists: store.playlists, currentUser: store.auth.user}),
	(dispatch) => bindActionCreators({ getUserPlaylists, clearPlaylists }, dispatch)
)(Playlists);