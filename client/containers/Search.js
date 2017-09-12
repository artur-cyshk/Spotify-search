import { connect } from 'react-redux';
import { Search } from '../components';
import { searchTracks } from '../actions/creators';

export default connect(
	(store) => ({tracks: store.tracks}),
	(dispatch) => { 
		return {
			searchTracks: (searchValue) => dispatch(searchTracks(searchValue.target.value))
		}
	}
)(Search);
