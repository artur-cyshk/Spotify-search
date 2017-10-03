import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/profile.less';

const Profile = ({ auth }) => {
	const { loading, error, user } = auth;
	const { images = [], external_urls = {}, display_name } = user; 
	images[0] = images[0] || { url: './no-profile.png' };
	return (
		<a href={external_urls.spotify} target="_blank" className="profile" title={`Go to ${display_name} profile`}>
			<span title={display_name}>{display_name}</span>
			{images[0].url ? <img src={images[0].url} /> : <i className="fa fa-user" aria-hidden="true"></i>}	
		</a>
	);
};

Profile.propTypes = {
	auth: PropTypes.object
};

export default Profile;
