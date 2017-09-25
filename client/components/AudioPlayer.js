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
        const playerPlaylist = playerInfo.tracks.map(track => {
            return {
                url: track.preview_url,
                artist: {
                    name: 'aaa',
                    song: track.name
                },
                
                cover: (track.album.images[0] || {}).url || './spotify.jpg'
            }
        });
        console.log(playerPlaylist);
        if (playerPlaylist.length === 0) {
            playerPlaylist.push(noTracksInfo);
        }
        
        return (
            <div className="audio-player">
                    audioPlayer
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