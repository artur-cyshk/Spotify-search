import React from 'react';
import PropTypes from 'prop-types';
import '../styles/logo.less';

const Logo = ({name}) => {
	return (
		<div className="logo">
			<i className="fa fa-spotify" aria-hidden="true"></i>
			<div>Spotify</div>
			<div>Search</div>
		</div>
	);
};

Logo.propTypes = {
    name: PropTypes.string
};

export default Logo;
