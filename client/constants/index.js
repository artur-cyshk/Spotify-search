export const APPLICATION_TITLE = 'Spotify search';
export const EMPTY_IMAGE_SRC = './spotify.jpg';
export const MUSIC_LIST_LIMIT = 40;
export const SEARCH_DEBOUNCE_IN_MS = 500;
export const UNAUTHORIZED_STATUS = 401;

export const SPOTIFY_METHODS = {
	searchTracks: 'searchTracks',
	getMyCurrentPlayingTrack: 'getMyCurrentPlayingTrack',
	skipToNext: 'skipToNext',
	skipToPrevious: 'skipToPrevious',
	getMyDevices: 'getMyDevices',
	getMe: 'getMe',
	play: 'play',
	pause: 'pause'
};

export const COMMON_DATA = {
	premiumAccount: 'premium',
	deviceTypes: {
		pc: 'Computer',
		mobile: 'Smartphone'
	},
	routes: {
		'/current-playing': 'Now playing',
		'/login': 'Login',
		'/search': 'Search'
	}
};

export const AUDIO_PLAYER_SETS = {
	width: 300,
	heigth: 300,
	color: "white",
	comment: false,
	autoPlay: true,
	fullPlayer: true
};

export const ROUTES_LINKS = [
	{
		path: '/login',
		name: 'Sign in',
		iconClass: 'fa-sign-in',
		isAuthorized: false
	},
	{
		path: '/search',
		name: 'search',
		iconClass: 'fa-search',
		isAuthorized: true
	},
	{
		path: '/current-playing',
		name: 'Now playing',
		iconClass: 'fa-music',
		isAuthorized: true
	}
];