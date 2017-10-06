import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Profile } from './';
import { COMMON_DATA } from '../constants';
import '../styles/header.less';

const Header = ({ route, auth, setAuthorization }) => {
	return (
		<header className="content-header">
			<span>{COMMON_DATA.routes[route.pathname]}</span>	
			{auth.isAuthorized && <Profile auth={auth} setAuthorization={setAuthorization}/>} 
		</header>
	);
};

Header.propTypes = {
	route: PropTypes.shape({
		pathname: PropTypes.string
	}),
	auth: PropTypes.object
};

export default Header;
