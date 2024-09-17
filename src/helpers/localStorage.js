export const getFromLs = (key) => JSON.parse(window.localStorage.getItem(key));
export const setIntoLs = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));
