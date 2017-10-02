import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Track } from './';
import { AUDIO_PLAYER_SETS } from '../constants';
import Audio from 'react-audioplayer';
import '../styles/audioPlayer.less';

class AudioPlayer extends Component {

    componentWillReceiveProps(nextProps) {
        const { track } = nextProps.audioPlayer;
        if (this.audioComponent && !track.preview_url) {
            this.audioComponent.audioElement.pause();
        }      
    }

    render() {
        const playerInfo = this.props.audioPlayer;
        const playlist = playerInfo.track.preview_url && [
            {
                src: playerInfo.track.preview_url,
                name: playerInfo.track.name,
                img: ((playerInfo.track.album || {}).images || [{}])[0].url
            }
        ];
        return (
            <div className="audio-player">
                {playlist && 
                    <Audio
                        {...AUDIO_PLAYER_SETS}
                        playlist={playlist}
                        ref={(component) => this.audioComponent = component}
                    />
                }
            </div>
        );
    } 
}

AudioPlayer.propTypes = {
    audioPlayer: PropTypes.shape({
        track: PropTypes.shape({
            album: PropTypes.object,
            artists: PropTypes.arrayOf(PropTypes.object),
            name: PropTypes.string
        })        
    })
};

export default AudioPlayer;