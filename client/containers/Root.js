import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Root } from '../components';
import { setAuthorization, getMe } from '../actions/creators';

export default connect(
	(store) => ({auth: store.auth}),
	(dispatch) => bindActionCreators({ setAuthorization, getMe }, dispatch)
)(Root);