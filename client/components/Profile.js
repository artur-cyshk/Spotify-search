import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Logout } from './';
import '../styles/profile.less';

const Profile = ({ auth, setAuthorization }) => {
	const { loading, error, user, isAuthorized } = auth;
	const { images = [], external_urls = {}, display_name } = user; 
	images[0] = images[0] || { url: './no-profile.png' };
	return (
		<div className="profile">
			<a href={external_urls.spotify} target="_blank" className="profile" title={`Go to ${display_name || 'yours'} profile`}>
				{images[0].url ? <img src={images[0].url} /> : <i className="fa fa-user" aria-hidden="true"></i>}	
			</a>
			{auth.isAuthorized && <Logout setAuthorization={setAuthorization}/>}
		</div>
	);
};

Profile.propTypes = {
	auth: PropTypes.object,
    setAuthorization: PropTypes.func
};

export default Profile;
