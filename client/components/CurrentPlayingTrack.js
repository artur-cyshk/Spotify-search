import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CurrentPlayingTrack extends Component {

    componentDidMount() {
    	this.props.getCurrentPlayingTrack();
    }

    render() {
        return (
            <div className="login">
                {this.props.currentPlayingTrack.track.name}
            </div>
        );
    }
}

CurrentPlayingTrack.propTypes = {
    getCurrentPlayingTrack: PropTypes.func,
    currentPlayingTrack: PropTypes.object
}
