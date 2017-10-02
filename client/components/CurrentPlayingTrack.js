import React, { Component } from 'react';
import { Spinner } from './';
import PropTypes from 'prop-types';
import { COMMON_DATA } from '../constants';
import '../styles/currentPlaying.less';

export default class CurrentPlayingTrack extends Component {

    componentDidMount() {
        this.loadCurrentPlayingTrack();
    }

    componentWillUnmount() {
        this.props.removeDevices();
    }

    loadCurrentPlayingTrack = () => {
        this.props.getDevices();
        this.props.getCurrentPlayingTrack();
    }

    nextTrack = () => {
        this.props.playTrack({device_id: this.activeDevice.id}, true);
    }

    prevTrack = () => {
        this.props.playTrack({device_id: this.activeDevice.id});
    }

    getDeviceIcon = (deviceType) => {
        switch (deviceType) {
            case COMMON_DATA.deviceTypes.mobile:
                return 'fa-mobile';
            case COMMON_DATA.deviceTypes.pc:
                return 'fa-desktop';
            default:
                return 'fa-ban';        
        }
    }

    render() {
        const { track, loadingCurrentPlayingTrack, loadingNextTrack, loadingPrevTrack, error } = this.props.currentPlayingTrack;
        const { loading: loadingDevices, list: devicesList } = this.props.devices;
        const album = track.album || {};
        const { images } = album;
        const artists = (track.artists || []).map((artist) => artist.name).join();
        const { product } = this.props.auth.user;
        const isPremium = product === COMMON_DATA.premiumAccount;
        this.activeDevice = devicesList.find(device => device.is_active) || {};
        const deviceIconClass = this.getDeviceIcon(this.activeDevice.type);
        
        return (
            <div className="current-playing">
                <header>Now playing </header>
                <div>
                    <div className="player-control">
                        {isPremium && <button disabled={loadingPrevTrack} className="load-track load-prev-track" onClick={this.prevTrack}>
                            {loadingPrevTrack && <Spinner/> || <i className="fa fa-step-backward"></i>}
                        </button>}
                        <div className="track-info-wrapper">
                            <div className="active-device-type">
                                 {loadingDevices ? <Spinner/> : <i className={` fa ${deviceIconClass}`} aria-hidden="true"></i>}
                            </div>
                            <i className="fa fa-refresh" onClick={this.loadCurrentPlayingTrack}/>
                            {loadingCurrentPlayingTrack ? <Spinner/> :
                                track.name ?
                                <div className="track-info">
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
                                </div> :
                                <span className="warning">
                                    { error.message ? error.message : 'There are no playing tracks' }
                                </span>
                            }
                        </div>
                        {isPremium && <button disabled={loadingNextTrack} className="load-track load-next-track" onClick={this.nextTrack}>
                            {loadingNextTrack ? <Spinner/> : <i className="fa fa-step-forward"></i>}
                        </button>}
                    </div>

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
