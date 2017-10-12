import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
import PropTypes from 'prop-types';
import { Spinner, WindowEvent } from './';
import { Track } from '../containers';
import { SEARCH_DEBOUNCE_IN_MS, MOBILE_SCROLL_OFFSET} from '../constants';
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
		let { scrollHeight, offsetHeight, scrollTop } = ev.srcElement ? ev.srcElement.documentElement : ev.target;
		scrollHeight = ev.srcElement ? scrollHeight - MOBILE_SCROLL_OFFSET : scrollHeight;
		if (offsetHeight + scrollTop >= scrollHeight) { 
			this.setState({ currentPage: ++this.state.currentPage });
			this.props.searchTracks(this.state.searchValue, this.state.currentPage);
		}
	}

	render() {
		const { tracks } = this.props;
		const tracksList = tracks.list.map((track) => <Track key={track.id} info={track}/>);

		return (
			<WindowEvent eventType="scroll" onEventHandled={this.loadMoreTracks}>
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
			</WindowEvent>	
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
    searchTracks: PropTypes.func,
    clearTracksList: PropTypes.func
}

export default Search;