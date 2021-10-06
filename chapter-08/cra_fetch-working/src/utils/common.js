export const loadJSON = key => {
    if (key) {
        const data = localStorage.getItem(key);
        return data !== 'undefined' && JSON.parse(data)
    }
    return null;
}

export const saveJSON = (key, data) => {
    if (key && data) {
        localStorage.setItem(key, JSON.stringify(data))
    } 
}