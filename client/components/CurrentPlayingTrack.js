import React, { Component } from 'react';
import { Spinner } from './';
import PropTypes from 'prop-types';
import '../styles/currentPlaying.less';

export default class CurrentPlayingTrack extends Component {

    componentDidMount() {
        this.props.getDevices();
    	this.props.getCurrentPlayingTrack();
    }

    componentWillUnmount() {
        this.props.removeDevices();
    }

    nextTrack = () => {
        console.log(this.props);
        this.props.playTrack({device_id: this.props.devices.list.devices[0].id}, true);
    }

    prevTrack = () => {
        this.props.playTrack({device_id: this.props.devices.list.devices[0].id});
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
                    <button onClick={this.prevTrack}>prev track</button>
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
                    <button onClick={this.nextTrack}>next track</button>
                </div>

            </div>
        );
    }
}

CurrentPlayingTrack.propTypes = {
    getCurrentPlayingTrack: PropTypes.func,
    currentPlayingTrack: PropTypes.object,
    playTrack: PropTypes.func
}
