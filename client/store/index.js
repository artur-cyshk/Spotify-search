import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import spotifyApiMiddleware from '../middlewares/spotifyApi';
import rootReducer from '../reducers';

export default (preloadedState) => {
	return createStore(
		rootReducer,
		preloadedState,
		compose(applyMiddleware(thunk, spotifyApiMiddleware))
	);
};