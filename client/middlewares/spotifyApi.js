import Spotify from 'spotify-web-api-js';

import { UNAUTHORIZED_STATUS } from '../constants';
import { localStorageService, historyService } from '../services';

const spotifyApi = new Spotify();

export default function ({ dispatch }) {
    return (next) => (action) => {
        if (action.spotifyData) {
            const { method, options } = action.spotifyData;
            const accessToken = localStorageService.getItem('accessToken');
            if(accessToken) {
                spotifyApi.setAccessToken(accessToken);
            }
            next(action);
            return spotifyApi[method].apply(spotifyApi, options)
                .then(res => {
                    if (action.onSuccess) action.onSuccess(res, dispatch);
                }).catch(err => {
                    if(err.status === UNAUTHORIZED_STATUS) {
                        historyService.getHistory().push(`/error/There was an error. Sign in, please.`);
                    }
                    if(action.onFailure && err.responseText) {
                        action.onFailure(JSON.parse(err.responseText), dispatch);
                    }
                });
        }
        return next(action);
    };
}