import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
import PropTypes from 'prop-types';
import { Track, Spinner, WindowScroll } from './';
import { SEARCH_DEBOUNCE_IN_MS } from '../constants';
import '../styles/search.less';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = { searchValue: '', currentPage: 0 };
		this.searchWithDebounce = debounce(SEARCH_DEBOUNCE_IN_MS, this.searchWithDebounce);
		
	}

	componentWillUnmount() {
		this.props.clearTracksList();
	}

	searchWithDebounce(value, page) {
		this.props.searchTracks(value, page);
	}

	searchTracksHandler = (event) => {
		this.setState({ searchValue: event.target.value, сurrentPage: 0 });
		this.searchWithDebounce(event.target.value, 0);
	}

	loadMoreTracks = (ev) => {
		if (this.props.tracks.total <= this.props.tracks.list.length || !this.state.searchValue) { 
			return;
		};
		const { scrollHeight, offsetHeight, scrollTop } = ev.target.scrollingElement || ev.target;
		if (offsetHeight + scrollTop >= scrollHeight) { 
			this.setState({ currentPage: ++this.state.currentPage });
			this.props.searchTracks(this.state.searchValue, this.state.currentPage);
		}
	}

	render() {
		const { tracks, addTrackToPlayer, removeTrackFromPlayer, currentPlayingInPlayer } = this.props;
		const tracksList = tracks.list.map((track) => <Track currentPlayingInPlayer={currentPlayingInPlayer} addTrackToPlayer={addTrackToPlayer} removeTrackFromPlayer={removeTrackFromPlayer} key={track.id} info={track}/>);
		return (
			<WindowScroll onWindowScroll={this.loadMoreTracks}>
				<div className="search-wrapper">
					<input type="text" placeholder="Search tracks" className="search-input" onKeyUp={this.searchTracksHandler}/>
					<div className="search-result">
						<span className="warning">
							{tracks.error.message}
						</span>
						<span hidden={tracks.total !== undefined || tracks.error.message} className="warning">
							Put something to start searching
						</span>
						<span className="total-info">
							{tracks.total !== undefined ? `${tracks.total} ${tracks.total === 1 ? 'track was' : 'tracks were'} found` : ''}
						</span>
					</div>
					<ul onScroll={this.loadMoreTracks} className="tracks-list">
						{tracksList}
					</ul>
					{tracks.loading && <Spinner/>}
				</div>
			</WindowScroll>	
		);		
	}
};

Search.propTypes = {
    tracks: PropTypes.shape({
    	loading: PropTypes.bool,
    	list: PropTypes.arrayOf(PropTypes.object),
    	total: PropTypes.number,
    	error: PropTypes.object
    }),
    currentPlayingInPlayer: PropTypes.object,
    searchTracks: PropTypes.func,
    addTrackToPlayer: PropTypes.func,
    removeTrackFromPlayer: PropTypes.func,
    clearTracksList: PropTypes.func
}

export default Search;