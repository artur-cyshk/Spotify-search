import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from './';
import { Track } from '../containers';
import ToggleButton from 'react-toggle-button';

class PlaylistInfo extends Component {

    //TODO add load more tracks logic

    constructor(props) {
        super(props);
        this.state = {
            isTracksListSmarted: false
        };
    }

	componentDidMount() {
		this.props.getPlaylistTracks(this.props.info.owner.id, this.props.info.id);
	}

    componentWillUnmount() {
        this.props.clearPlaylistTracks();
    }

    handleToggleChange = (ev) => {
        this.setState({
            isTracksListSmarted: !ev
        });
    }

    render() {
    	const { info, currentPlaylistTracks } = this.props;
        const { data, loading: trackLoading } = currentPlaylistTracks;
        const { images = [], owner = {}, external_urls = {} } = info;
        const { isTracksListSmarted } = this.state;
        const tracks = data.items.map( ({track}) => <Track smarted={isTracksListSmarted} inline={true} key={track.id} info={track}/>);
            
    	return (
    		<div className="playlist-info"> 
                <div className="playlist-header">
                    <img className="playlist-image" src={(images[0] || {}).url}/>
                    <span>
                       <a href={external_urls.spotify} target="_blank">{owner.display_name ? `${owner.display_name}'s playlist` : 'No owner'}</a>
                       <span className="toggle-wrapper">
                            <ToggleButton
                                value={isTracksListSmarted}
                                onToggle={this.handleToggleChange}
                            />
                            {this.state.isTracksListSmarted ? 'Smart' : 'Full'} View
                       </span>
                       
                    </span>
                </div>
                
                <ul className="tracks-list-in-playlist">{tracks}</ul>
                {trackLoading && <Spinner/>}
            </div>
    	);
    }
}

PlaylistInfo.propTypes = {
    info: PropTypes.object,
    getPlaylistTracks: PropTypes.func,
    clearPlaylistTracks: PropTypes.func,
    currentPlaylistTracks: PropTypes.object
};


export default PlaylistInfo;