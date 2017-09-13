import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { historyService } from '../services';
import { Logo, Login, Navigate } from './';
import { Search, CurrentPlayingTrack } from '../containers';
import { APPLICATION_TITLE, ROUTES_LINKS } from '../constants';
import '../styles/main.less';

export default class Root extends Component {
    render() {
    	const history = historyService.getHistory();
    	return (
		    <Router history={history}>
		    	<main>
		    		<div className="left-side-bar">
		    			<Logo name={APPLICATION_TITLE}/>
		    			<Navigate routes={ROUTES_LINKS}/>
			    	</div>
			    	<div className="content">
			    		<Switch>
						    <Route path="/login" component={Login} />
						    <Route path="/success/:accessToken" component={Login} />
						    <Route path="/error/:errorMsg" component={Login} />
						    <Route path="/current-playing" component={CurrentPlayingTrack} />
						    <Route path="/search" component={Search} />
						    <Redirect to="/login"/>
					    </Switch>
			    	</div>
		    	</main>
		    </Router>
	    );
    }
}