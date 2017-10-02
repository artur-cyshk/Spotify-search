import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = ({ route }) => {
	return <header>{route}</header>;
};

Header.propTypes = {
	route: PropTypes.string
};

export default Header;
