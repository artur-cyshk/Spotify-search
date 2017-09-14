import { SET_AUTHORIZATION } from '../types';

export const setAuthorization = (isAuthorized) => ({ type: SET_AUTHORIZATION, payload: isAuthorized });