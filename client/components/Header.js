import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Profile } from './';
import '../styles/header.less';

const Header = ({ route, auth }) => {
	return (
		<header className="content-header">
			<span>{route}</span>	
			{auth.isAuthorized && <Profile auth={auth}/>} 
		</header>
	);
};

Header.propTypes = {
	route: PropTypes.string,
	auth: PropTypes.object
};

export default Header;
