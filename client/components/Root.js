import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { historyService } from '../services';
import { Logo, Login } from './';
import { Search, CurrentPlayingTrack } from '../containers';
import { APPLICATION_TITLE } from '../constants';

export default class Root extends Component {
    render() {
    	const history = historyService.getHistory();
    	return (
		    <Router history={history}>
		    	<main>
		    		<Logo name={APPLICATION_TITLE}/>
		    		<Switch>
					    <Route path="/login" component={Login} />
					    <Route path="/success/:accessToken" component={Login} />
					    <Route path="/error/:errorMsg" component={Login} />
					    <Route path="/current-playing" component={CurrentPlayingTrack} />
					    <Route path="/search" component={Search} />
					    <Redirect to="/login"/>
				    </Switch>
		    	</main>
		    </Router>
	    );
    }
}