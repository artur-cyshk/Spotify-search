import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlaylistInfo extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//load tracks
	}

    render() {

    	const { info } = this.props;
    	return (
    		<div className="playlist-info">{info.name}</div>
    	);
    }
}

PlaylistInfo.propTypes = {
    info: PropTypes.object
};


export default PlaylistInfo;