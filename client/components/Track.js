import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/track.less';

class Track extends Component {

	constructor(props) {
		super(props);
		this.addTrackToAudioPlayer = this.addTrackToAudioPlayer.bind(this);
		this.removeTrackFromAudioPlayer = this.removeTrackFromAudioPlayer.bind(this);
	}

	addTrackToAudioPlayer() {
		this.props.addTrackToPlayer(this.props.info);
	}

	removeTrackFromAudioPlayer() {
		this.props.removeTrackFromPlayer();
	}

	render() {
		const { info, addTrackToPlayer, removeTrackFromPlayer } = this.props;
	    const album = info.album || {};
	    const { images } = album;
	    const artists = (info.artists || []).map((artist) => artist.name).join();
		return (
			<li className="track-in-list">
				<img src={!!images ? (images[0] || {}).url : null}/>
				<div className="track-in-list-info">
					<button onClick={this.addTrackToAudioPlayer}> listen preview </button>
					<button onClick={this.removeTrackFromAudioPlayer}> stop preview </button>
					<span title={artists}><i className="fa fa-users" aria-hidden="true"></i>{artists}</span>
					<span title={album.name}><i className="fa fa-book" aria-hidden="true"></i>{album.name}</span>
					<span title={info.name}><i className="fa fa-music" aria-hidden="true"></i>{info.name}</span>
				</div>
			</li>
		);
	}
}

Track.propTypes = {
    info: PropTypes.shape({
    	album: PropTypes.object,
    	artists: PropTypes.arrayOf(PropTypes.object),
    	name: PropTypes.string
    }),
    addTrackToPlayer: PropTypes.func,
    removeTrackFromPlayer: PropTypes.func
};

export default Track;