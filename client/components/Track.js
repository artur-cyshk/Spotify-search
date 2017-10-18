import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_IMAGE_SRC, COMMON_DATA } from '../constants';
import { ContextMenu } from './';
import { Playlists } from '../containers';
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

	changeTrackState = () => {
        const { info, currentPlayingGlobally, changeTrackState } = this.props;
        const isPlayingGlobally = info.id === currentPlayingGlobally.track.id && currentPlayingGlobally.track.is_playing;
        changeTrackState({ uris: [info.uri] }, isPlayingGlobally, true);
    }

	render() {
		const { inline, smarted, info, addTrackToPlayer, removeTrackFromPlayer, currentPlayingInPlayer = {}, currentPlayingGlobally, auth } = this.props;
		const { track: currentPlayingGloballyTrack, loadingTrackState } = currentPlayingGlobally;	
	    const album = info.album || {};
	    const { images = [] } = album;
	    const artists = (info.artists || []).map((artist) => artist.name).join();
	    const isPlayingLocally = info.id === currentPlayingInPlayer.id;
	    const isPlayingGlobally = info.id === currentPlayingGloballyTrack.id;
	    const { product } = auth.user;
        const isPremium = product === COMMON_DATA.premiumAccount;

		return (
			<li title={smarted ? `${artists} - ${info.name}` : ''} className={`track-in-list ${inline ? 'inline' : ''} ${smarted ? 'smarted' : ''}`}>
				<img src={(images[0] || {}).url || EMPTY_IMAGE_SRC}/>
				{inline ?   
					<div title={`${artists} - ${info.name}`} className="track-in-list-info">
						<span>{artists} - {info.name}</span>
					</div> : 
					<div className="track-in-list-info">
						<span title={artists}><i className="fa fa-users" aria-hidden="true"></i>{artists}</span>
						<span title={album.name}><i className="fa fa-book" aria-hidden="true"></i>{album.name}</span>
						<span title={info.name}><i className="fa fa-music" aria-hidden="true"></i>{info.name}</span>
					</div>
				}
				<div className="actions">
                    <ContextMenu title="Select playlist"> 	
	                    <button
							className={`preview-button action-button ${isPlayingLocally ? 'active' : ''}`} 
							onClick={isPlayingLocally ? this.removeTrackFromAudioPlayer : this.addTrackToAudioPlayer}
							disabled={!info.preview_url} 
							title={isPlayingLocally ? `Now playing ${artists} - ${info.name}` : `Listen "${artists} - ${info.name}" preview`}
						>
							<i className="fa fa-music"></i>
						</button>
						{ isPremium && <button title={isPlayingGlobally && currentPlayingGloballyTrack.is_playing ? 'Pause track' : 'Play track'} className="play-button action-button" disabled={loadingTrackState} onClick={this.changeTrackState}>
	                        <i className={`fa ${isPlayingGlobally && currentPlayingGloballyTrack.is_playing ? 'fa-pause-circle' : 'fa-play-circle'}`} />
	                    </button> }
	                    { isPremium && <button title="Add to playlist" className="play-button action-button" onClick={this.toggleTrackPopupVisibility}>
	                        <i className="fa fa-plus" />
	                    </button> }
	                </ContextMenu>    
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