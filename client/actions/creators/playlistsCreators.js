import { 
    GET_USER_PLAYLISTS, GET_USER_PLAYLISTS_READY, GET_USER_PLAYLISTS_FAILURE, CLEAR_PLAYLISTS, EXPAND_PLAYLIST,
    GET_PLAYLIST_TRACKS, GET_PLAYLIST_TRACKS_READY, GET_PLAYLIST_TRACKS_FAILURE, CLEAR_PLAYLIST_TRACKS
} from '../types';
import { PLAYLISTS_LIMIT, SPOTIFY_METHODS } from '../../constants';

const onDone = (res, err) => {
    return {
        type: res ? GET_USER_PLAYLISTS_READY : GET_USER_PLAYLISTS_FAILURE,
        payload: res || err
    };
}

const onPlaylistTracksDone = (res, err) => {
    return {
        type: res ? GET_PLAYLIST_TRACKS_READY : GET_PLAYLIST_TRACKS_FAILURE,
        payload: res || err
    };
}

export const expandPlaylist = (id) => {
    return {
        type: EXPAND_PLAYLIST,
        payload: id
    }
}

export const getPlaylistTracks = (userId, playlistId, options) => {
    return { 
        type: GET_PLAYLIST_TRACKS,
        onSuccess: (res, dispatch) => dispatch(onPlaylistTracksDone(res, null)),
        onFailure: (res, dispatch) => dispatch(onPlaylistTracksDone(null, res)),
        spotifyData: {
            method: SPOTIFY_METHODS.getPlaylistTracks,
            options: [userId, playlistId, options]
        }
    }; 
}

export const clearPlaylistTracks = () => {
    return {
        type: CLEAR_PLAYLIST_TRACKS
    }
}

export const getUserPlaylists = (page) => {
    return { 
            type: GET_USER_PLAYLISTS,
            onSuccess: (res, dispatch) => dispatch(onDone(res, null)),
            onFailure: (res, dispatch) => dispatch(onDone(null, res)),
            spotifyData: {
                method: SPOTIFY_METHODS.getUserPlaylists,
                options: [{ limit: PLAYLISTS_LIMIT, offset: page * PLAYLISTS_LIMIT }]
            }
    };
}

export const clearPlaylists = () => {
    return {
        type: CLEAR_PLAYLISTS
    }
} 