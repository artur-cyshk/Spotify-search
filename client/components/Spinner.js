import React from 'react';
import '../styles/spinner.less';

export default ({ hidden }) => {
	return (
		<div hidden={hidden} className="spinner">
		  <div className="bounce1"></div>
		  <div className="bounce2"></div>
		  <div className="bounce3"></div>
		</div>
	);
};

