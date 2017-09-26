import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Track } from './';
import '../styles/audioPlayer.less';

class AudioPlayer extends Component {

    componentDidUpdate(prevProps, prevState) {
        // const { track } = this.props.audioPlayer;
        // console.log(track, 123);
        // if (!track.preview_url) {
        //     console.log(this)
        //     this.audioComponent.pause();
        // }
    }

    render() {
        const noTracksInfo = {
            src: undefined,
            name: 'no tracks added to playlist',
            img: './spotify.jpg'
        }
        const playerInfo = this.props.audioPlayer;
        console.log(playerInfo);
        return (
            <div className="audio-player">
            {playerInfo.track.preview_url && <audio autoPlay controls>  <source src={playerInfo.track.preview_url}/> </audio>}
            
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