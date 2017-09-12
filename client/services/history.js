import createHistory from 'history/createHashHistory';
const history = createHistory();

export const getHistory = () => {
	return history;
}