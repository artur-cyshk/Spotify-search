import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from './';
import { Track } from '../containers';
import ToggleButton from 'react-toggle-button';

class PlaylistInfo extends Component {

    //TODO add load more tracks logic
    //TODO fix scroll jumping

    constructor(props) {
        super(props);
        this.state = {
            isTracksListSmarted: false,
            page: 0
        };
    }

	componentDidMount() {
		this.props.getPlaylistTracks(this.props.info.owner.id, this.props.info.id, 0);
	}

    loadMoreTracks = () => {
        const { total, items = []} = this.props.currentPlaylistTracks.data || {};
        if (total <= items.length) { 
            return;
        };
        this.setState({
            page: ++this.state.page
        });
        this.props.getPlaylistTracks(this.props.info.owner.id, this.props.info.id, this.state.page);
        
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
        const { items = [], total } = data;
        const tracks = items.map( ({track}, i) => <Track smarted={isTracksListSmarted} inline={true} key={track.id + i} info={track}/>);
            
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
                {total > items.length && 
                    <button className="load-more-button" onClick={this.loadMoreTracks}>
                        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
                    </button>
                }
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