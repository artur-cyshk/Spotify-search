import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_IMAGE_SRC } from '../constants';
import '../styles/track.less';

class Track extends Component {

	constructor(props) {
		super(props);
	}

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
		const { info, addTrackToPlayer, removeTrackFromPlayer, currentPlayingInPlayer = {} } = this.props;
	    const album = info.album || {};
	    const { images } = album;
	    const artists = (info.artists || []).map((artist) => artist.name).join();
	    const isPlayingNow = info.id === currentPlayingInPlayer.id;
		return (
			<li className="track-in-list">
				{info.preview_url && 
					<i 
						className={`fa ${isPlayingNow ? 'fa-pause' : 'fa-play'}`} 
						onClick={isPlayingNow ? this.removeTrackFromAudioPlayer : this.addTrackToAudioPlayer}
						title={isPlayingNow ? 'Now playing' : 'Listen track preview'}
					></i>
				}
				<img src={!!images ? (images[0] || {}).url : EMPTY_IMAGE_SRC}/>
				<div className="track-in-list-info">
					
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