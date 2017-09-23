import { ADD_TRACK_TO_PLAYER, REMOVE_TRACK_FROM_PLAYER } from '../types';

export const addTrackToPlayer = (track) => ({ type: ADD_TRACK_TO_PLAYER, payload: track });
export const removeTrackFromPlayer = (trackId) => ({ type: REMOVE_TRACK_FROM_PLAYER, payload: trackId });