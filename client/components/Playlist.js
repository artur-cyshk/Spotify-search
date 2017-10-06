import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlaylistInfo } from './';
import '../styles/playlist.less';

class Playlist extends Component {

	constructor(props) {
		super(props);
		this.state = {
			infoExpanded: false
		};
	}

	toggleInfoBlock = () => {
		this.setState({
			infoExpanded: !this.state.infoExpanded
		})
	}

	render() {
		const { playlist } = this.props;
		return (
			<li className={`${this.state.infoExpanded ? 'expanded' : ''} playlist`}>
				<span className="title" onClick={this.toggleInfoBlock}>{playlist.name}</span>
				{this.state.infoExpanded && <PlaylistInfo info={playlist}/>}
			</li>
		);		
	}
}

Playlist.propTypes = {
    playlist: PropTypes.object
};

export default Playlist;