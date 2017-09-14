import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Track, Spinner } from './';
import '../styles/search.less';

class Search extends Component {

	componentWillUnmount() {
		this.props.clearTracksList();
	}

	render() {
		const { tracks, searchTracks } = this.props;
		const tracksList = tracks.list.map((track) => <Track key={track.id} info={track}/>);
		return (
			<div className="search-wrapper">
				<h2>Search tracks <Spinner hidden={!tracks.loading}/></h2>
				<div className="search-block">
					<input type="text" placeholder="Search tracks" className="search-input" onChange={searchTracks}/>
					<div className="search-result">
						<span className="warning">
							{tracks.error.message}
						</span>
						<span className="total-info">
							{tracks.total !== undefined ? `${tracks.total} tracks were found` : ''}
						</span>
					</div>
					<ul className="tracks-list">
						{tracksList}
					</ul>
				</div>
			</div>
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
    searchTracks: PropTypes.func
}

export default Search;