import React from 'react';
import PropTypes from 'prop-types';
import { Track } from './';
import '../styles/audioPlayer.less';

const AudioPlayer = ({track}) => {
    const info = track || {};
    const album = info.album || {};
    const { images } = album;
    const artists = (info.artists || []).map((artist) => artist.name).join();
    return (
        <div className="audio-player">
            AudioPlayer
            <Track info={info}/>
        </div>
    );
};

AudioPlayer.propTypes = {
    track: PropTypes.shape({
        album: PropTypes.object,
        artists: PropTypes.arrayOf(PropTypes.object),
        name: PropTypes.string
    })
};

export default AudioPlayer;