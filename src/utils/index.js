export function setLocalStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}
export function getLocalStorage(key) {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export function removeLocalStorage(key) {
    sessionStorage.removeItem(key);
}












