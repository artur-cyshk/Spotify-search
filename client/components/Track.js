import React from 'react';
import PropTypes from 'prop-types';
import '../styles/track.less';

const Track = ({info}) => {
    const album = info.album || {};
    const { images } = album;
    const artists = (info.artists || []).map((artist) => artist.name).join();
	return (
		<li className="track-in-list">
			<img src={!!images ? images[0].url : null}/>
			<div className="track-in-list-info">
				<span title={artists}><i className="fa fa-users" aria-hidden="true"></i>{artists}</span>
				<span title={album.name}><i className="fa fa-book" aria-hidden="true"></i>{album.name}</span>
				<span title={info.name}><i className="fa fa-music" aria-hidden="true"></i>{info.name}</span>
			</div>
		</li>
	);
};

Track.propTypes = {
    info: PropTypes.shape({
    	album: PropTypes.object,
    	artists: PropTypes.arrayOf(PropTypes.object),
    	name: PropTypes.string
    })
};

export default Track;