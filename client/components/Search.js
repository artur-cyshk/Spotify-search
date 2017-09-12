import React from 'react';
import Track from './Track';


export default ({ tracks, searchTracks }) => {
	const tracksList = tracks.list.map((track) => <Track key={track.id} info={track}/>);
	return (
		<div className="search-wrapper">
			<input type="text" onChange={searchTracks}/>
			<ul>
				{tracksList}
			</ul>
			{tracks.loading}
			{tracks.total}
			{tracks.error.message}
		</div>
	);
};