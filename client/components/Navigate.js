import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/navigate.less';

const Navigate = ({ routes }) => {
	const routesList = routes.map((route) => {
		return (
			<NavLink to={route.path} activeClassName="active" key={route.name}>
				<i className={`fa ${route.iconClass}`} aria-hidden="true"></i>
				<div>{route.name}</div>
			</NavLink>
		);
	});
	return (
		<nav>
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
    	iconClass: PropTypes.string
    }))
}

export default Navigate;