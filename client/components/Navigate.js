import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Logout } from './';
import '../styles/navigate.less';

const Navigate = ({isAuthorized, routes, setAuthorization}) => {
	const routesList = routes.filter(route => route.isAuthorized === isAuthorized).map(route => {
		return (
			<NavLink className="nav-button" to={route.path} activeClassName="active" key={route.name}>
				<i className={`fa ${route.iconClass}`} aria-hidden="true"></i>
				<div>{route.name}</div>
			</NavLink>
		);
	});
	return (
		<nav className="app-navigation">
			<div className="title">
				Navigate
			</div>
			{routesList}
			{isAuthorized && <Logout setAuthorization={setAuthorization}/>}
		</nav>
	);
};

Navigate.propTypes = {
	 routes: PropTypes.arrayOf(PropTypes.shape({
    	name: PropTypes.string,
    	path: PropTypes.string,
    	iconClass: PropTypes.string,
    	isAuthorized: PropTypes.bool
    })),
    isAuthorized: PropTypes.bool,
    setAuthorization: PropTypes.func
}

export default Navigate;