import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localStorageService } from '../services';
import { Link } from 'react-router-dom';

class Logout extends Component {

	logout = () => {
		localStorageService.removeItem('accessToken');
        localStorageService.removeItem('refreshToken');
		this.props.setAuthorization(false);
	}

    render() {
        return (
            <Link to="/login" title="Sign out" className="profile-btn logout" onClick={this.logout}>
            	<i className="fa fa-sign-out" aria-hidden="true"></i>
            </Link>
        );
    }
}

Logout.propTypes = {
    setAuthorization: PropTypes.func
};

export default Logout;