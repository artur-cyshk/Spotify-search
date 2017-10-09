import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlaylistInfo } from './';
import '../styles/playlist.less';

class Playlist extends Component {

	toggleInfoBlock = () => {
		const { playlist = {tracks: {}}, expanded, expandPlaylist } = this.props;
		const { total } = playlist.tracks;
		if (total > 0) {
			expandPlaylist(expanded ? false : playlist.id);
		}
	}

	render() {
		const { expanded, playlist = {}, getPlaylistTracks, currentPlaylistTracks, clearPlaylistTracks } = this.props;
		const { total } = playlist.tracks || {};
		return (
			<li className={`${expanded ? 'expanded' : ''} ${!total ? 'empty' : ''} playlist`}>
				<span title={playlist.name} className="title" onClick={this.toggleInfoBlock}>
					{playlist.name}
					<span className="tracks-count">{total} {total === 1 ? 'track' : 'tracks'}</span>
				</span>
				{expanded && <PlaylistInfo getPlaylistTracks={getPlaylistTracks} currentPlaylistTracks={currentPlaylistTracks} clearPlaylistTracks={clearPlaylistTracks} info={playlist}/>}
			</li>
		);
	}
}

Playlist.propTypes = {
	expanded: PropTypes.bool,
    playlist: PropTypes.object,
    getPlaylistTracks: PropTypes.func,
    clearPlaylistTracks: PropTypes.func,
    expandPlaylist: PropTypes.func,
    currentPlaylistTracks: PropTypes.object
};

export default Playlist;