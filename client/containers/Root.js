import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Root } from '../components';
import { setAuthorization } from '../actions/creators';

export default connect(
	(store) => ({isAuthorized: store.auth.isAuthorized}),
	(dispatch) => bindActionCreators({ setAuthorization }, dispatch)
)(Root);
