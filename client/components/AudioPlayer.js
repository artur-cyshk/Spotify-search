import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Track } from './';
import ReactAudioPlayer from 'react-audio-player';
import '../styles/audioPlayer.less';

class AudioPlayer extends Component {

    componentDidUpdate() {
        if (this.player && !this.props.track.preview_url) {
            this.player.audioEl.pause();
        }
    }

   render() {
        const info = this.props.track || {};
        const album = info.album || {};
        const { images } = album;
        const artists = (info.artists || []).map((artist) => artist.name).join();
        
        
        return (
            <div className="audio-player">
                <ReactAudioPlayer
                    ref={(element) => { this.player = element; }}
                    src={info.preview_url}
                    autoPlay
                    controls
                />
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