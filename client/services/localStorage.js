export const getItem = (key) => {
	const result = window.localStorage.getItem(key);
	return result ? JSON.parse(result) : null;
};
export const setItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));
export const removeItem = (key) => window.localStorage.removeItem(key);