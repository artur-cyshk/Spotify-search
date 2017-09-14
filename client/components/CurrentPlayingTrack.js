import React, { Component } from 'react';
import { Spinner } from './';
import PropTypes from 'prop-types';
import '../styles/currentPlaying.less';

export default class CurrentPlayingTrack extends Component {

    componentDidMount() {
    	this.props.getCurrentPlayingTrack();
    }

    render() {
        const { track, loading, error } = this.props.currentPlayingTrack;
        const album = track.album || {};
        const { images } = album;
        const artists = (track.artists || []).map((artist) => artist.name).join();
        return (
            <div className="current-playing">
                <header>Now playing {loading && <Spinner/>}</header>
                <div hidden={loading}>
                    <span className="warning" hidden={!!track.name}>
                        { error.message ? error.message : 'There are no playing tracks' }
                    </span>
                    <div className="track-info" hidden={!track.name}>
                        <div className="album-image">
                            <img src={!!images ? images[0].url : null}/>
                        </div>
                        <div className="song-info">
                            <span>
                                <i className="fa fa-book" aria-hidden="true"></i>
                                {album.name}
                            </span>
                            <span>
                                <i className="fa fa-users" aria-hidden="true"></i>
                                {artists}
                            </span>
                            <span>
                               <i className="fa fa-music" aria-hidden="true"></i>
                               {track.name}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

CurrentPlayingTrack.propTypes = {
    getCurrentPlayingTrack: PropTypes.func,
    currentPlayingTrack: PropTypes.object
}
