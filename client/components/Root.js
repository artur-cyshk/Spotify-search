import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { historyService, localStorageService } from '../services';
import { Logo, Login, Navigate, Header } from './';
import { Search, CurrentPlayingTrack, AudioPlayer } from '../containers';
import { APPLICATION_TITLE, ROUTES_LINKS } from '../constants';
import '../styles/main.less';

class Root extends Component {

	componentDidMount() {
		const isAuthorized = !!localStorageService.getItem('accessToken');
		this.props.setAuthorization(isAuthorized);
		if (isAuthorized) {
			this.props.getMe();
		}
	}

    render() {
    	const history = historyService.getHistory();
    	const { setAuthorization, getMe, auth } = this.props;
    	const { isAuthorized } = auth;

    	return (
		    <Router history={history}>
		    	<main>
		    		<AudioPlayer/>
		    		<div className="left-side-bar">
		    			<Logo name={APPLICATION_TITLE}/>
		    			<Navigate isAuthorized={isAuthorized} setAuthorization={setAuthorization} routes={ROUTES_LINKS}/>
			    	</div>
			    	<div className="content">
			    		<Header auth={auth} route="Test route"></Header>
			    		<Switch>
				    		<Route path="/error/:errorMsg" render={({match}) => <Login match={match} setAuthorization={setAuthorization}/>} />  
			    			{isAuthorized === true && <Route path="/search" component={Search} />}
			    			{isAuthorized === true && <Route path="/current-playing" component={CurrentPlayingTrack} />}
			    			{isAuthorized === true && <Redirect to="/search"/>}	

			    			{isAuthorized === false && <Route path="/login" component={Login} />}
			    			{isAuthorized === false && <Route path="/success/:accessToken/:refreshToken"  render={({match}) => <Login match={match} getMe={getMe} setAuthorization={setAuthorization}/>} />}
			    			{isAuthorized === false && <Redirect to="/login"/>}
 		    			</Switch>
			    	</div>
		    	</main>
		    </Router>
	    );
    }
}

Root.propTypes = {
    auth: PropTypes.object,
    setAuthorization: PropTypes.func,
    getMe: PropTypes.func
};


export default Root;