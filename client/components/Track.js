import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_IMAGE_SRC } from '../constants';
import '../styles/track.less';

class Track extends Component {

	addTrackToAudioPlayer = () => {
		this.removeTrackFromAudioPlayer();
		setTimeout(()=> this.props.addTrackToPlayer(this.props.info));
	}

	removeTrackFromAudioPlayer = () => {
		this.props.removeTrackFromPlayer();
	}

	componentWillUnmount() {
		this.removeTrackFromAudioPlayer();
	}

	render() {
		const { inline, smarted, info, addTrackToPlayer, removeTrackFromPlayer, currentPlayingInPlayer = {}, currentPlayingGlobally } = this.props;
	    const album = info.album || {};
	    const { images = [] } = album;
	    const artists = (info.artists || []).map((artist) => artist.name).join();
	    const isPlayingLocally = info.id === currentPlayingInPlayer.id;
	    const isPlayingGlobally = info.id === currentPlayingGlobally.id;

		return (
			<li title={smarted ? `${artists} - ${info.name}` : ''} className={`track-in-list ${inline ? 'inline' : ''} ${smarted ? 'smarted' : ''}`}>
				<img src={(images[0] || {}).url || EMPTY_IMAGE_SRC}/>
				{inline ?   
					<div className="track-in-list-info">
						<span>{artists} - {info.name}</span>
					</div> : 
					<div className="track-in-list-info">
						<span title={artists}><i className="fa fa-users" aria-hidden="true"></i>{artists}</span>
						<span title={album.name}><i className="fa fa-book" aria-hidden="true"></i>{album.name}</span>
						<span title={info.name}><i className="fa fa-music" aria-hidden="true"></i>{info.name}</span>
					</div>
				}
				<div className="actions">
					<button
						className={`preview-button ${isPlayingLocally ? 'active' : ''}`} 
						onClick={isPlayingLocally ? this.removeTrackFromAudioPlayer : this.addTrackToAudioPlayer}
						disabled={!info.preview_url} 
						title={isPlayingLocally ? `Now playing ${artists} - ${info.name}` : `Listen "${artists} - ${info.name}" preview`}
					>
						<i className="fa fa-music"></i>
					</button>
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
    removeTrackFromPlayer: PropTypes.func,
    currentPlayingInPlayer: PropTypes.object,
    currentPlayingGlobally: PropTypes.object,
    inline: PropTypes.bool,
    smarted: PropTypes.bool 
};

export default Track;