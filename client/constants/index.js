export const APPLICATION_TITLE = 'Spotify search';
export const EMPTY_IMAGE_SRC = './spotify.jpg';
export const MUSIC_LIST_LIMIT = 40;
export const PLAYLISTS_LIMIT = 20;
export const PLAYLIST_TRACKS_LIMIT = 100;
export const SEARCH_DEBOUNCE_IN_MS = 500;
export const UNAUTHORIZED_STATUS = 401;
export const MOBILE_SCROLL_OFFSET = 150;
export const GETTING_CURRENT_PLAYING_DELAY = {
	afterPlay: 1500,
	afterChangeState: 500
};

export const SPOTIFY_METHODS = {
	searchTracks: 'searchTracks',
	getMyCurrentPlayingTrack: 'getMyCurrentPlayingTrack',
	skipToNext: 'skipToNext',
	skipToPrevious: 'skipToPrevious',
	getMyDevices: 'getMyDevices',
	getMe: 'getMe',
	play: 'play',
	pause: 'pause',
	getUserPlaylists: 'getUserPlaylists',
	getPlaylistTracks: 'getPlaylistTracks'
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
		'/search': 'Search',
		'/playlists': 'My Playlists'
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
	},
	{
		path: '/playlists',
		name: 'My Playlists',
		iconClass: 'fa-list-ol',
		isAuthorized: true
	},
];