import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/playlist.less';

class Playlist extends Component {

	toggleInfoBlock = (ev) => {
		const { playlist = {tracks: {}}, expanded, expandPlaylist } = this.props;
		const { total } = playlist.tracks;
		if (total > 0) {
			expandPlaylist(expanded ? {} : playlist);
		}
	}

	render() {
		const { expanded, playlist = {} } = this.props;
		const { total } = playlist.tracks || {};
		return (
			<li className={`${expanded ? 'expanded' : ''} ${!total ? 'empty' : ''} playlist`}>
				<span title={playlist.name} className="title" onClick={this.toggleInfoBlock}>
					{playlist.name}
					<span className="tracks-count">{total} {total === 1 ? 'track' : 'tracks'}</span>
				</span>
			</li>
		);
	}
}

Playlist.propTypes = {
	expanded: PropTypes.bool,
    playlist: PropTypes.object,
    expandPlaylist: PropTypes.func
};

export default Playlist;