import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { historyService, localStorageService } from '../services';
import { Logo, Login, Navigate, Header, WindowEvent } from './';
import { Search, CurrentPlayingTrack, AudioPlayer, Playlists } from '../containers';
import { APPLICATION_TITLE, ROUTES_LINKS } from '../constants';
import '../styles/main.less';

class Root extends Component {

	constructor(props) {
		super(props);
		const history = historyService.getHistory();
		this.state = {
			location: {
				pathname: history.location.pathname
			},
			history: history
		}
	}

	componentDidMount() {
		const isAuthorized = !!localStorageService.getItem('accessToken');
		this.props.setAuthorization(isAuthorized);
		this.state.history.listen(location => this.setState({location: location}));
		if (isAuthorized) {
			this.props.getMe();
			this.props.getCurrentPlayingTrack();
		}
	}

    render() {
    	const { setAuthorization, getMe, auth, getCurrentPlayingTrack } = this.props;
    	const { isAuthorized } = auth;
    	return (
    		<WindowEvent eventType="focus" onEventHandled={getCurrentPlayingTrack}>
			    <Router history={this.state.history}>
			    	<main>
			    		<AudioPlayer/>
			    		<div className="left-side-bar">
			    			<Logo name={APPLICATION_TITLE}/>
			    			<Navigate isAuthorized={isAuthorized} routes={ROUTES_LINKS}/>
				    	</div>
				    	<div className="content">
				    		<Header auth={auth} setAuthorization={setAuthorization} route={this.state.location}></Header>
				    		<Switch>
					    		<Route path="/error/:errorMsg" render={({match}) => <Login match={match} setAuthorization={setAuthorization}/>} />  
				    			{isAuthorized === true && <Route path="/search" component={Search} />}
				    			{isAuthorized === true && <Route path="/current-playing" component={CurrentPlayingTrack} />}
				    			{isAuthorized === true && <Route path="/playlists" component={Playlists} />}
				    			{isAuthorized === true && <Redirect to="/search"/>}	

				    			{isAuthorized === false && <Route path="/login" component={Login} />}
				    			{isAuthorized === false && <Route path="/success/:accessToken/:refreshToken"  render={({match}) => <Login match={match} getCurrentPlayingTrack={getCurrentPlayingTrack} getMe={getMe} setAuthorization={setAuthorization}/>} />}
				    			{isAuthorized === false && <Redirect to="/login"/>}
	 		    			</Switch>
				    	</div>
			    	</main>    
			    </Router>
		    </WindowEvent>
	    );
    }
}

Root.propTypes = {
    auth: PropTypes.object,
    setAuthorization: PropTypes.func,
    getMe: PropTypes.func
};


export default Root;