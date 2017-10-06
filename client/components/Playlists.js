import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Playlist, Spinner, WindowScroll } from './';
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
		const { scrollHeight, offsetHeight, scrollTop } = ev.target.scrollingElement || ev.target;
		if (offsetHeight + scrollTop >= scrollHeight) { 
			this.setState({ currentPage: ++this.state.currentPage });
			this.props.getUserPlaylists(this.state.currentPage);
		}
	}

    render() {
    	const { error, data, loading: playlistsLoading } = this.props.playlists;
    	const { searchValue } = this.state;
    	const playlists = (data.items || [])
    		.filter(playlist => playlist.name.toLowerCase().includes(searchValue.toLowerCase()))
    		.map(playlist => <Playlist key={playlist.id} playlist={playlist}/>);	
    	const foundedCount = playlists.length;

    	return <div className="playlists-wrapper">
    		<WindowScroll onWindowScroll={this.loadMorePlaylists}>
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
					{playlistsLoading && <Spinner/>}
				</div>
			</WindowScroll>	
    	</div>;
    }
}

Playlists.propTypes = {
    getUserPlaylists: PropTypes.func,
    clearPlaylists: PropTypes.func,
    playlists: PropTypes.object,
    currentUser: PropTypes.object
};


export default Playlists;