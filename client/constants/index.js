export const APPLICATION_TITLE = 'Spotify search';
export const MUSIC_LIST_LIMIT = 10;
export const SPOTIFY_METHODS = {
	searchTracks: 'searchTracks',
	getMyCurrentPlayingTrack: 'getMyCurrentPlayingTrack'
};
export const ROUTES_LINKS = [
	{
		path: '/login',
		name: 'Sign in',
		iconClass: 'fa-sign-in'
	},
	{
		path: '/search',
		name: 'search',
		iconClass: 'fa-search'
	},
	{
		path: '/current-playing',
		name: 'Now playing',
		iconClass: 'fa-music'
	}
];