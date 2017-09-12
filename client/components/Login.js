import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localStorageService, historyService } from '../services';

export default class Login extends Component {

    componentDidMount() {
        const { match } = this.props;
        const { accessToken, errorMsg } = match.params;
        if (accessToken) {
            localStorageService.setItem('accessToken', accessToken);
            historyService.getHistory().push('/search');
        }
        if (errorMsg) {
            localStorageService.removeItem('accessToken');
        }
    }

    render() {
        const { errorMsg } = this.props.match.params;
        return (
            <div className="login">
                <h2>Here's our login page!</h2>
                <a href="/login">sign in using spotify</a>
                <div className="error-msg">{errorMsg}</div>
            </div>
        );
    }
}

Login.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            accessToken: PropTypes.string,
            errorMsg: PropTypes.string
        })
    })
}
