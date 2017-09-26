import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Track } from './';
import '../styles/audioPlayer.less';

class AudioPlayer extends Component {

    render() {
        const noTracksInfo = {
            src: undefined,
            name: 'no tracks added to playlist',
            img: './spotify.jpg'
        }
        const playerInfo = this.props.audioPlayer;

        return (
            <div className="audio-player">
                   {playerInfo.track.name}
            </div>
        );
    } 
}

AudioPlayer.propTypes = {
    track: PropTypes.shape({
        album: PropTypes.object,
        artists: PropTypes.arrayOf(PropTypes.object),
        name: PropTypes.string
    })
};

export default AudioPlayer;