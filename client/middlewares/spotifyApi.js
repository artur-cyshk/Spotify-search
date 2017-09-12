import Spotify from 'spotify-web-api-js';
import { localStorageService } from '../services';

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
                    if(action.onFailure && err.responseText) {
                        action.onFailure(JSON.parse(err.responseText), dispatch);
                    }
                });
        }
        return next(action);
    };
}