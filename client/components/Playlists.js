import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Playlist, Spinner, WindowEvent, PlaylistInfo, ModalWindow } from './';
import { MOBILE_SCROLL_OFFSET } from '../constants';
import '../styles/playlists.less';

class Playlists extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchValue: '',
			currentPage: 0
		};
	}

	componentDidMount() {
		this.props.getUserPlaylists(this.state.currentPage);
	}

	componentWillUnmount() {
		this.props.clearPlaylists();
	}

	searchPlaylistHandler = (e) => {
		this.setState({searchValue: e.target.value || ''});
	}

	loadMorePlaylists = (ev) => {
		const { total, items = []} = this.props.playlists.data || {};
		if (total <= items.length) { 
			return;
		};
		let { scrollHeight, offsetHeight, scrollTop } = ev.srcElement ? ev.srcElement.documentElement : ev.target;
		scrollHeight = ev.srcElement ? scrollHeight - MOBILE_SCROLL_OFFSET : scrollHeight;
		if (offsetHeight + scrollTop >= scrollHeight) { 
			this.setState({ currentPage: ++this.state.currentPage });
			this.props.getUserPlaylists(this.state.currentPage);
		}
	}

	closeModalHandler = () => {
		this.props.expandPlaylist({});
	}

    render() {
    	const { playlists: initialPlaylists, expandPlaylist, getPlaylistTracks, clearPlaylistTracks, currentPlaylistTracks } = this.props;
    	const { error, data, loading: playlistsLoading, currentExpandedPlaylist } = initialPlaylists;
    	const { searchValue } = this.state;
    	const playlists = (data.items || [])
    		.filter(playlist => playlist.name.toLowerCase().includes(searchValue.toLowerCase()))
    		.map(playlist => 
    			<Playlist 
	    			expanded={currentExpandedPlaylist.id === playlist.id}
	    			expandPlaylist={expandPlaylist}
	    			key={playlist.id} 
	    			playlist={playlist}
    			/>
    		);	
    	const foundedCount = playlists.length;

    	return <div className="playlists-wrapper">
    		<WindowEvent eventType="scroll" onEventHandled={this.loadMorePlaylists}>
	    		<div className="search-wrapper">
					<input type="text" placeholder="Search in loaded playlists" className="search-input" onKeyUp={this.searchPlaylistHandler}/>
					<div className="search-result">
						<span className="warning">
							{error.message}
						</span>
						{data.total && <span className="total-info">
							<span className="foundedCount">{foundedCount}</span>/{data.total} playlists visible
						</span>}
					</div>
					<ul className="playlists-list" onScroll={this.loadMorePlaylists}>{playlists}</ul>
					{currentExpandedPlaylist.id &&
						<ModalWindow onCloseModal={this.closeModalHandler} title={`${currentExpandedPlaylist.name} Playlist`}>
							<PlaylistInfo getPlaylistTracks={getPlaylistTracks} currentPlaylistTracks={currentPlaylistTracks} clearPlaylistTracks={clearPlaylistTracks} info={currentExpandedPlaylist}/>
						</ModalWindow>
					}
					{playlistsLoading && <Spinner/>}
				</div>
			</WindowEvent>	
    	</div>;
    }
}

Playlists.propTypes = {
    getUserPlaylists: PropTypes.func,
    getPlaylistTracks: PropTypes.func,
    clearPlaylists: PropTypes.func,
    clearPlaylistTracks: PropTypes.func,
    currentPlaylistTracks: PropTypes.object,
    expandPlaylist: PropTypes.func,
    playlists: PropTypes.object
};


export default Playlists;