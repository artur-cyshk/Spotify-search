import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Playlists } from '../components';
import { getUserPlaylists, clearPlaylists, getPlaylistTracks, clearPlaylistTracks, expandPlaylist } from '../actions/creators';

export default connect(
	(store) => ({playlists: store.playlists, currentPlaylistTracks: store.playlistTracks}),
	(dispatch) => bindActionCreators({ getUserPlaylists, clearPlaylists, getPlaylistTracks, clearPlaylistTracks, expandPlaylist }, dispatch)
)(Playlists);