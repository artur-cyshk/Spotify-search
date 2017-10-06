import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navigate.less';

const Navigate = ({isAuthorized, routes}) => {
	
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
    isAuthorized: PropTypes.bool
}

export default Navigate;