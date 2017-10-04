import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localStorageService, historyService } from '../services';
import '../styles/login.less';

export default class Login extends Component {

    componentDidMount() {
        const { match, setAuthorization } = this.props;
        const { accessToken, refreshToken, errorMsg } = match.params;
        if (accessToken && refreshToken) {
            localStorageService.setItem('accessToken', accessToken);
            localStorageService.setItem('refreshToken', refreshToken);
            setAuthorization(true);
            historyService.getHistory().push('/search');
            this.props.getMe();
        }
        if (errorMsg) {
            localStorageService.removeItem('accessToken');
            setAuthorization(false);
        }
    }

    render() {
        const { errorMsg } = this.props.match.params;
        return (
            <div className="login">
                <a href="/login">sign in using spotify</a>
                <span className="error">{errorMsg}</span>
            </div>
        );
    }
}

Login.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            accessToken: PropTypes.string,
            errorMsg: PropTypes.string
        }),
        setAuthorization: PropTypes.func
    }),
    getMe: PropTypes.func,
    setAuthorization: PropTypes.func
}
