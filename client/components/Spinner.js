import React from 'react';
import PropTypes from 'prop-types';
import '../styles/spinner.less';

const Spinner = ({ hidden }) => {
	return (
		<div hidden={hidden} className="spinner">
		  <div className="bounce1"></div>
		  <div className="bounce2"></div>
		  <div className="bounce3"></div>
		</div>
	);
};

Spinner.propTypes = {
    hidden: PropTypes.bool
};

export default Spinner;
