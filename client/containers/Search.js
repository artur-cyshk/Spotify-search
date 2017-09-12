import { connect } from 'react-redux';
import Search from '../components/Search';
import { searchTracks } from '../actions/creators';

export default connect(
	(store) => ({tracks: store.tracks}),
	(dispatch) => { 
		return {
			searchTracks: (searchValue) => dispatch(searchTracks(searchValue.target.value))
		}
	}
)(Search);
